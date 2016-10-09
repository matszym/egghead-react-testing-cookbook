import {test} from 'tape';
import React from 'react';
import {shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import CoolComponent from './CoolComponent';

test('<CoolComponent />', nest => {
  nest.test('should render greeting prop', test => {
    const expected = "hello world";
    
    const wrapper = shallow(<CoolComponent greeting={expected} />);

    const actual = wrapper
    .text()
    .includes(expected);
    const msg = `${actual} was expected contains equal ${expected}`;

    test.assert(actual, msg);
    test.end();
  });
  nest.test('should render specific jsx', test => {
    const wrapper = shallow(<CoolComponent greeting="hello world" />)

    const expected = (
      <div>
        <h1>Greeting</h1>
        <p>hello world</p>
      </div>
    );

    test.assert(wrapper.matchesElement(expected));

    test.end();
  })
});