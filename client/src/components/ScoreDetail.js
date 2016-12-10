import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import { Table } from 'react-bootstrap';

export const ScoreDetail = React.createClass({
  mixins: [PureRenderMixin],
  getScore: function() {
    return this.props.scoresheet.get("score");
  },
  calculateSubTotal: function(startIndex){
    var sub= 0;
    var i;
    for(i = startIndex; i<startIndex+3;i++){
      sub += this.getScore().get(i);
    }
    return sub;
  },
  calculateTotal: function(endIndex){
    var sub= 0;
    var i;
    for(i = 0; i<endIndex;i++){
      sub += this.getScore().get(i);
    }
    return sub;
  },
  countTens: function(startIndex , endIndex=startIndex+3){
    var count = 0;
    var i;
    for(i = startIndex; i<endIndex;i++){
      if(this.getScore().get(i) === 10){
        count++;
      }
    }
    return count;
  },
  countNines: function(startIndex, endIndex=startIndex+3){
    var count = 0;
    var i;
    for(i = startIndex; i<endIndex;i++){
      if(this.getScore().get(i) === 9){
        count++;
      }
    }
    return count;
  },
  render: function(){
    return   (
      <Table striped bordered condensed responsive>
        <tbody>
          <tr >
            <td colSpan="4">Target: {this.props.scoresheet.get("target")}</td>
            <td colSpan="4">Distance: {this.props.scoresheet.get("distance")}</td>
          </tr>
          <tr>
            <td colSpan="4">Name: {this.props.scoresheet.get("shooter").get("username")}</td>
            <td colSpan="4">Number: {this.props.scoresheet.get("shooter").get("number")}</td>
          </tr>
          <tr>
            <td colSpan="4">Club: {this.props.scoresheet.get("shooter").get("club")}</td>
            <td colSpan="4">Location: {this.props.scoresheet.get("location")}</td>
          </tr>
          <tr>
            <td colSpan="4">Division: {this.props.scoresheet.get("shooter").get("division")}</td>
            <td colSpan="4">Category: {this.props.scoresheet.get("shooter").get("category")}</td>
          </tr>
          <tr>
            <td></td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>Stot</td>
            <td>Tot</td>
            <td>10's</td>
            <td>9's</td>
          </tr>
          <tr>
            <td>1</td>
            <td>{this.getScore().get(0)}</td>
            <td>{this.getScore().get(1)}</td>
            <td>{this.getScore().get(2)}</td>
            <td>{this.calculateSubTotal(0)}</td>
            <td>{this.calculateTotal(3)}</td>
            <td>{this.countTens(0)}</td>
            <td>{this.countNines(0)}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{this.getScore().get(3)}</td>
            <td>{this.getScore().get(4)}</td>
            <td>{this.getScore().get(5)}</td>
            <td>{this.calculateSubTotal(3)}</td>
            <td>{this.calculateTotal(6)}</td>
            <td>{this.countTens(3)}</td>
            <td>{this.countNines(3)}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{this.getScore().get(6)}</td>
            <td>{this.getScore().get(7)}</td>
            <td>{this.getScore().get(8)}</td>
            <td>{this.calculateSubTotal(6)}</td>
            <td>{this.calculateTotal(9)}</td>
            <td>{this.countTens(6)}</td>
            <td>{this.countNines(6)}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>{this.getScore().get(9)}</td>
            <td>{this.getScore().get(10)}</td>
            <td>{this.getScore().get(11)}</td>
            <td>{this.calculateSubTotal(9)}</td>
            <td>{this.calculateTotal(12)}</td>
            <td>{this.countTens(9)}</td>
            <td>{this.countNines(9)}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>{this.getScore().get(12)}</td>
            <td>{this.getScore().get(13)}</td>
            <td>{this.getScore().get(14)}</td>
            <td>{this.calculateSubTotal(12)}</td>
            <td>{this.calculateTotal(15)}</td>
            <td>{this.countTens(12)}</td>
            <td>{this.countNines(12)}</td>
          </tr>
          <tr>
            <td>6</td>
            <td>{this.getScore().get(15)}</td>
            <td>{this.getScore().get(16)}</td>
            <td>{this.getScore().get(17)}</td>
            <td>{this.calculateSubTotal(15)}</td>
            <td>{this.calculateTotal(18)}</td>
            <td>{this.countTens(15)}</td>
            <td>{this.countNines(15)}</td>
          </tr>
          <tr>
            <td>7</td>
            <td>{this.getScore().get(18)}</td>
            <td>{this.getScore().get(19)}</td>
            <td>{this.getScore().get(20)}</td>
            <td>{this.calculateSubTotal(18)}</td>
            <td>{this.calculateTotal(21)}</td>
            <td>{this.countTens(18)}</td>
            <td>{this.countNines(18)}</td>
          </tr>
          <tr>
            <td>8</td>
            <td>{this.getScore().get(21)}</td>
            <td>{this.getScore().get(22)}</td>
            <td>{this.getScore().get(23)}</td>
            <td>{this.calculateSubTotal(21)}</td>
            <td>{this.calculateTotal(24)}</td>
            <td>{this.countTens(21)}</td>
            <td>{this.countNines(21)}</td>
          </tr>
          <tr>
            <td>9</td>
            <td>{this.getScore().get(24)}</td>
            <td>{this.getScore().get(25)}</td>
            <td>{this.getScore().get(26)}</td>
            <td>{this.calculateSubTotal(24)}</td>
            <td>{this.calculateTotal(27)}</td>
            <td>{this.countTens(24)}</td>
            <td>{this.countNines(24)}</td>
          </tr>
          <tr>
            <td>10</td>
            <td>{this.getScore().get(27)}</td>
            <td>{this.getScore().get(28)}</td>
            <td>{this.getScore().get(29)}</td>
            <td>{this.calculateSubTotal(27)}</td>
            <td>{this.calculateTotal(30)}</td>
            <td>{this.countTens(27)}</td>
            <td>{this.countNines(27)}</td>
          </tr>
          <tr>
            <td colSpan="4"></td>
            <td colSpan="2">Total: {this.calculateTotal(30)}</td>
            <td>{this.countTens(0,30)}</td>
            <td>{this.countNines(0,30)}</td>
          </tr>
        </tbody>
      </Table>
    )}
  });

  function mapStateToProps(state) {
    return {
      scoresheet: state.get('scoresheet')
    };
  }


  export const ScoreDetailContainer = connect(mapStateToProps)(ScoreDetail);
