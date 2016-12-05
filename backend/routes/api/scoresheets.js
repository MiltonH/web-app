var router = require('express').Router();
var passport = require('passport');
var mongoose = require('mongoose');
var Scoresheet = mongoose.model('Scoresheet');
var User = mongoose.model('User');
var auth = require('../auth');

// Preload scoresheet objects on routes with ':scoresheet'
router.param('scoresheet', function(req, res, next, slug) {
  Scoresheet.findOne({ slug: slug})
    .populate('shooter')
    .then(function (scoresheet) {
      if (!scoresheet) { return res.sendStatus(404); }

      req.scoresheet = scoresheet;

      return next();
    }).catch(next);
});

router.get('/', auth.optional, function(req, res, next) {
  var query = {};
  var limit = 20;
  var offset = 0;

  if(typeof req.query.limit !== 'undefined'){
    limit = req.query.limit;
  }

  if(typeof req.query.offset !== 'undefined'){
    offset = req.query.offset;
  }

  Promise.all([
    req.query.shooter ? User.findOne({username: req.query.shooter}) : null,
  ]).then(function(results){
    var shooter = results[0];

    if(shooter){
      query.shooter = shooter._id;
    }

    return Promise.all([
      Scoresheet.find(query)
        .limit(limit)
        .skip(offset)
        .sort({createdAt: 'desc'})
        .populate('shooter')
        .exec(),
      Scoresheet.count(query).exec(),
      req.payload ? User.findById(req.payload.id) : null,
    ]).then(function(results){
      var scoresheets = results[0];
      var scoresheetsCount = results[1];
      var user = results[2];

      return res.json({
        scoresheets: scoresheets.map(function(scoresheet){
          return scoresheet.toJSONFor(user);
        }),
        scoresheetsCount: scoresheetsCount
      });
    });
  }).catch(next);
});

router.post('/', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(user){
    if (!user) { return res.sendStatus(401); }

    var scoresheet = new Scoresheet(req.body.scoresheet);

    scoresheet.shooter = user;

    return scoresheet.save().then(function(){
      console.log(scoresheet.shooter);
      return res.json({article: scoresheet.toJSONFor(user)});
    });
  }).catch(next);
});

// return a scoresheet
router.get('/:scoresheet', auth.optional, function(req, res, next) {
  Promise.all([
    req.payload ? User.findById(req.payload.id) : null,
    req.scoresheet.populate('shooter').execPopulate()
  ]).then(function(results){
    var user = results[0];

    return res.json({scoresheet: req.scoresheet.toJSONFor(user)});
  }).catch(next);
});

// update scoresheet
router.put('/:scoresheet', auth.required, function(req, res, next) {
  if(req.article._id.toString() === req.payload.id.toString()){
    if(typeof req.body.scoresheet.target !== 'undefined'){
      req.scoresheet.target = req.body.scoresheet.target;
    }

    if(typeof req.body.scoresheet.distance !== 'undefined'){
      req.scoresheet.distance = req.body.scoresheet.distance;
    }

    if(typeof req.body.scoresheet.location !== 'undefined'){
      req.scoresheet.location = req.body.scoresheet.location;
    }

    if(typeof req.body.scoresheet.score !== 'undefined'){
      req.scoresheet.score = req.body.scoresheet.score;
    }

    req.scoresheet.save().then(function(scoresheet){
      return res.json({scoresheet: scoresheet.toJSONFor(user)});
    }).catch(next);
  } else {
    return res.send(403);
  }
});

// delete article
router.delete('/:scoresheet', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(){
    if(req.scoresheet.shooter.toString() === req.payload.id.toString()){
      return req.scoresheet.remove().then(function(){
        return res.sendStatus(204);
      });
    } else {
      return res.sendStatus(403);
    }
  });
});


module.exports = router;
