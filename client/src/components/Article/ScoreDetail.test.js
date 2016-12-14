import React from 'react';
import { shallow } from 'enzyme';
import ScoreDetail from './ScoreDetail';

describe('ScoreDetail', () => {

  const scoredetail = shallow(<ScoreDetail scores={[10,10,9]}/>);

  it('ScoreDetail renders div with table', () => {
    expect(scoredetail.find('table').length).toEqual(1);
  });

  it('ScoreDetail renders all rows', () => {
    const arr = scoredetail.find('tr');
    expect(arr.length).toEqual(12);
  });


  it('ScoreDetail renders the top row cerrectly', () => {
    const arr = scoredetail.find('td');
    expect(arr.first().text()).toEqual('end');
    expect(arr.at(1).text()).toEqual('1');
    expect(arr.at(2).text()).toEqual('2');
    expect(arr.at(3).text()).toEqual('3');
    expect(arr.at(4).text()).toEqual('Stot');
    expect(arr.at(5).text()).toEqual('Tot');
    expect(arr.at(6).text()).toEqual('10\'s');
    expect(arr.at(7).text()).toEqual('9\'s');
  });
});
