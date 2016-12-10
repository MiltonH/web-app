import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export default React.createClass({
  render: function(){
    return  <div className="Banner">
          <Jumbotron>
            <h1>ArcheryComp</h1>
            <p>A place to brag about archery scores.</p>
          </Jumbotron>
  </div>
  }
});
