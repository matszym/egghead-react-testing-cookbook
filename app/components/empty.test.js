import tape from 'tape';

tape.test('empty', nest => {
  nest.test('should work', test => {
    const actual = true;
    const expected = true;

    test.equals(actual, expected);
  })
});