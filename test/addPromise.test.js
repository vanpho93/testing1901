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

describe('Test addPromise with async', () => {
    it('Can add 2 numbers', async () => {
        const result = await addPromise(4, 5);
        assert.equal(result, 9);
    });

    it('Cannot add a number and a string', async () => {
        try {
            const result = await addPromise('x', 5);
            // throw new Error('Wrong');
        } catch (error) {
            assert.equal(error.message, 'Type error');
        }
    });

    it('Cannot add a number and a string', async () => {
        const result = await addPromise('x', 5).catch(error => error);
        assert.equal(result.message, 'Type error');
    });
});
