import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route,hashHistory} from 'react-router';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
import App from './App';
import {ScoreDetailContainer} from './components/ScoreDetail';
import {ShooterContainer} from './components/Shooter';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    shooter: {
      username: "milton",
      club: "GSW",
      division: "compound",
      category: "Senior S1",
      number: "804085"
    },
    scoresheet: {
      target:"2C",
      distance:"18m",
      location:"kapellen",
      score:[10,10,9,
            10,9,9,
            9,9,9,
            10,9,9,
            9,9,9,
            10,10,10,
            10,9,9,
            9,9,9,
            10,10,9,
            9,9,9],
      shooter:{
        username: "milton",
        club: "GSW",
        division: "compound",
        category: "Senior S1",
        number: "804085"
      }
    }
  }
});


const routes = <Route component={App}>
  <Route path="/score" component={ScoreDetailContainer} />
  <Route path="/" component={ShooterContainer} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('root')
)
