import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import { Panel } from 'react-bootstrap';

export const Shooter = React.createClass({
  mixins: [PureRenderMixin],
  render: function(){
    return    <div className="shooter-info">
      <Panel>
      <p>Name: {this.props.shooter.get("username")}</p>
      <p>Club: {this.props.shooter.get("club")}</p>
      <p>Division: {this.props.shooter.get("division")}</p>
      <p>Category: {this.props.shooter.get("category")}</p>
      <p>Number: {this.props.shooter.get("number")}</p>
    </Panel>
    </div>
  }
});

function mapStateToProps(state) {
  return {
    shooter: state.get('shooter')
  };
}


export const ShooterContainer = connect(mapStateToProps)(Shooter);
