import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function(){
    return    <div className="score-preview">
      <ListGroup>
    <ListGroupItem header="Milton Hooft" href="#">18M - USK Kappelen - 558</ListGroupItem>
  </ListGroup>
    </div>
  }
});
