var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var slug = require('slug');
var User = mongoose.model('User');

var ScoresheetSchema = new mongoose.Schema({
  slug: {type: String, lowercase: true, unique: true},
  target: String,
  distance: String,
  location: String,
  score: [String],
  shooter: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {timestamps: true});

ScoresheetSchema.plugin(uniqueValidator, {message: 'is already taken'});

ScoresheetSchema.pre('validate', function(next){
  this.slugify();

  next();
});

ScoresheetSchema.methods.slugify = function() {
  this.slug = slug(`${this.location}${this.target}${this.shooter.username}`);
};

ScoresheetSchema.methods.toJSONFor = function(user){
  return {
    slug: this.slug,
    target: this.target,
    distance: this.distance,
    location: this.location,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    shooter: this.shooter.toProfileJSONFor(user)
  };
};

mongoose.model('Scoresheet', ScoresheetSchema);
