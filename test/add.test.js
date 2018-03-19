const assert = require('assert');
const { add } = require('../src/add');

it('Can add 2 numbers', () => {
    const total = add(4, 5);
    assert.equal(total, 9);
});

it('Can add 2 nagative numbers', () => {
    const total = add(-4, -5);
    assert.equal(total, -9);
});
