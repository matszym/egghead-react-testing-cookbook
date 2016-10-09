import React from 'react';
import LikeCounter from './LikeCounter';
import {shallow} from 'enzyme';
import test from 'tape';

test('<LikeCoutner />', nested => {
  nested.test('should be a link', test => {
    const wrapper = shallow(<LikeCounter count={5} />);

    const actual = wrapper.type();
    const expected = 'a';
    const msg = `<LikeCounter /> should be type an anchor tag`

    test.equal(actual, expected, msg);
    test.end();
  });
  nested.test('should show the like count as active', test => {
    const wrapper = shallow(<LikeCounter count={5} isActive={true} />);
    
    const className = "LikeCounter--active";

    const actual = wrapper.hasClass(className);
    const msg = `${wrapper.node.props.className} should contain ${className}`;

    test.assert(actual, msg);
    test.end();
  });
  nested.test('should show the like count as inactive', test => {
    const wrapper = shallow(<LikeCounter count={5} isActive={false}/>);

    const className = "LikeCounter--active";

    const actual = wrapper.hasClass(className);
    const msg = `${wrapper.node.props.className} should not contain ${className}`;

    test.notOk(actual, msg);
    test.end();
  });
});
