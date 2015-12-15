//node_modules/.bin/jasmine-node spec

// describing a suite of tests
describe('a set of problems to solve', function() {

  // describe an individual test
  describe('a failing test', function() {
    it('must not be false', function() {
       expect(true).toBe(true);
    });

    it('is 5 > 3', function() {
      var expected = true;
      var assert;
      if (5 > 3) {
        assert = true;
      } else {
        assert = false;
      }
      expect(assert).toBe(expected);
    });
  });

});
