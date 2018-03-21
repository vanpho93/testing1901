const assert = require('assert');
const { addPromise } = require('../src/addPromise');

describe('Test addPromise function', () => {
    it('Can add 2 numbers', done => {
        addPromise(4, 5)
        .then(result => {
            assert.equal(result, 9);
            done();
        });
    });

    it('Cannot add a number and a string', done => {
        addPromise('x', 5)
        .catch(error => {
            assert.equal(error.message, 'Type error');
            done();
        });
    });
});
