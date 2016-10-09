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
  nested.test('isActive', nested => {
    function renderLikeCounter(isActive) {
      const wrapper = shallow(<LikeCounter count={5} isActive={isActive} />);
      
      const className = "LikeCounter--active";

      const actual = wrapper.hasClass(className);
      const msg = `${wrapper.node.props.className} should${!isActive && " not"} contain ${className}`;

      return {actual, msg};
    }

    nested.test('should show the like count as active', test => {
      const {actual, msg} = renderLikeCounter(true);

      test.assert(actual, msg);
      test.end();
    });
    nested.test('should show the like count as inactive', test => {
      const {actual, msg} = renderLikeCounter(false);

      test.notOk(actual, msg);
      test.end();
    });    
  });
});
