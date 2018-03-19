const { add } = require('../src/add');

it('Can add 2 numbers', () => {
    const total = add(4, 5);
    if (total !== 9) throw new Error('Sai');
});
