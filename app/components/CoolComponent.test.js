import {test} from 'tape';
import React from 'react';
import {shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import CoolComponent from './CoolComponent';

test('<CoolComponent />', nest => {
  nest.test('should render greeting prop', test => {
    const expected = "hello world";
    
    const wrapper = shallow(<CoolComponent greeting={expected} />);

    const actual = wrapper.findWhere(node => node.text() === expected && node.type() !== undefined).text();
    const msg = `${actual} was expected to equal ${expected}`;

    test.equal(actual, expected, msg);
    test.end();
  });
});