'use strict';

/**
 * Module dependencies.
 */
var assert = require('assert');
var repeats = require('../index');

/**
 * Tests for `repeats`.
 */
describe('#repeats', function() {

    it('throws error if first argument is invalid type', function() {
        [
            undefined,
            null,
            1,
            {},
            [],
            function() {}
        ].forEach(function(value) {
            assert.throws(function() { repeats(value); }, TypeError);
        });
    });

    it('repeats string once if second argument is undefined or invalid', function() {
        assert.equal(repeats('foo'), 'foo');
        assert.equal(repeats('foo', 0), 'foo');
        assert.equal(repeats('foo', null), 'foo');
        assert.equal(repeats('foo', NaN), 'foo');
    });

    it('repeats string n times if second argument is a positive integer', function() {
        assert.equal(repeats('foo', 1), 'foo');
        assert.equal(repeats('foo', 2), 'foofoo');
        assert.equal(repeats('foo', 3), 'foofoofoo');
        assert.equal(repeats('foo', 5), 'foofoofoofoofoo');
    });

    it('returns original string if length is zero', function() {
        assert.equal(repeats(''), '');
        assert.equal(repeats('', 10), '');
    });

});
