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
});
