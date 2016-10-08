import {test} from 'tape';
import createId from './create-id';

console.log('loaded');

test('createId', nest => {
  nest.test('should convert a description into a uinique id', test => {
    const actual = createId(123, 'Cool example description');
    const expected = '123-cool-example';
    const msg = `${actual} should be equal to ${expected}`;

    test.equal(actual, expected, msg);
    test.end();
  });
})