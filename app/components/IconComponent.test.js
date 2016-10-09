import React from 'react';
import {shallow} from 'enzyme';
import {test} from 'tape';

import IconComponent from './IconComponent';

test('<IconComponent />', nested => {
  nested.test('should render icon specified in props.name', test => {
    const wrapper = shallow(<IconComponent name="facebook" />);

    const className = "fa-facebook";

    const actual = wrapper.hasClass(className);
    const msg = `${wrapper.node.props.className} should contain ${className}`;
    
    test.assert(actual, msg);

    test.end();
  });
});