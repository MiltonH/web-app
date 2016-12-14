import React from 'react';

export const ScoreDetail = React.createClass({
  calculateSubTotal: function(startIndex){
    var sub= 0;
    var i;
    for(i = startIndex; i<startIndex+3;i++){
      sub += parseInt(this.props.scores[i]);
    }
    return sub;
  },
  calculateTotal: function(endIndex){
    var sub= 0;
    var i;
    for(i = 0; i<endIndex;i++){
      sub += parseInt(this.props.scores[i]);
    }
    return sub;
  },
  countTens: function(startIndex , endIndex=startIndex+3){
    var count = 0;
    var i;
    for(i = startIndex; i<endIndex;i++){
      if(parseInt(this.props.scores[i]) === 10){
        count++;
      }
    }
    return count;
  },
  countNines: function(startIndex, endIndex=startIndex+3){
    var count = 0;
    var i;
    for(i = startIndex; i<endIndex;i++){
      if(parseInt(this.props.scores[i]) === 9){
        count++;
      }
    }
    return count;
  },
  render: function(){
    return   (
      <div className="scoredetail">
        <table className="table table-bordered table-striped">
          <tbody>
          <tr>
            <td>end</td>
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
            <td>{this.props.scores[0]}</td>
            <td>{this.props.scores[1]}</td>
            <td>{this.props.scores[2]}</td>
            <td>{this.calculateSubTotal(0)}</td>
            <td>{this.calculateTotal(3)}</td>
            <td>{this.countTens(0)}</td>
            <td>{this.countNines(0)}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{this.props.scores[3]}</td>
            <td>{this.props.scores[4]}</td>
            <td>{this.props.scores[5]}</td>
            <td>{this.calculateSubTotal(3)}</td>
            <td>{this.calculateTotal(6)}</td>
            <td>{this.countTens(3)}</td>
            <td>{this.countNines(3)}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{this.props.scores[6]}</td>
            <td>{this.props.scores[7]}</td>
            <td>{this.props.scores[8]}</td>
            <td>{this.calculateSubTotal(6)}</td>
            <td>{this.calculateTotal(9)}</td>
            <td>{this.countTens(6)}</td>
            <td>{this.countNines(6)}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>{this.props.scores[9]}</td>
            <td>{this.props.scores[10]}</td>
            <td>{this.props.scores[11]}</td>
            <td>{this.calculateSubTotal(9)}</td>
            <td>{this.calculateTotal(12)}</td>
            <td>{this.countTens(9)}</td>
            <td>{this.countNines(9)}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>{this.props.scores[12]}</td>
            <td>{this.props.scores[13]}</td>
            <td>{this.props.scores[14]}</td>
            <td>{this.calculateSubTotal(12)}</td>
            <td>{this.calculateTotal(15)}</td>
            <td>{this.countTens(12)}</td>
            <td>{this.countNines(12)}</td>
          </tr>
          <tr>
            <td>6</td>
            <td>{this.props.scores[15]}</td>
            <td>{this.props.scores[16]}</td>
            <td>{this.props.scores[17]}</td>
            <td>{this.calculateSubTotal(15)}</td>
            <td>{this.calculateTotal(18)}</td>
            <td>{this.countTens(15)}</td>
            <td>{this.countNines(15)}</td>
          </tr>
          <tr>
            <td>7</td>
            <td>{this.props.scores[18]}</td>
            <td>{this.props.scores[19]}</td>
            <td>{this.props.scores[20]}</td>
            <td>{this.calculateSubTotal(18)}</td>
            <td>{this.calculateTotal(21)}</td>
            <td>{this.countTens(18)}</td>
            <td>{this.countNines(18)}</td>
          </tr>
          <tr>
            <td>8</td>
            <td>{this.props.scores[21]}</td>
            <td>{this.props.scores[22]}</td>
            <td>{this.props.scores[23]}</td>
            <td>{this.calculateSubTotal(21)}</td>
            <td>{this.calculateTotal(24)}</td>
            <td>{this.countTens(21)}</td>
            <td>{this.countNines(21)}</td>
          </tr>
          <tr>
            <td>9</td>
            <td>{this.props.scores[24]}</td>
            <td>{this.props.scores[25]}</td>
            <td>{this.props.scores[26]}</td>
            <td>{this.calculateSubTotal(24)}</td>
            <td>{this.calculateTotal(27)}</td>
            <td>{this.countTens(24)}</td>
            <td>{this.countNines(24)}</td>
          </tr>
          <tr>
            <td>10</td>
            <td>{this.props.scores[27]}</td>
            <td>{this.props.scores[28]}</td>
            <td>{this.props.scores[29]}</td>
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
        </table>
      </div>
    )}
  });



  export default ScoreDetail;
