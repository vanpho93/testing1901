function addCallback(a, b, cb) {
    setTimeout(() => {
        if (isNaN(a) || isNaN(b)) cb(new Error('Type error'));
        cb(null, a + b);
    }, 300)
}

module.exports = { addCallback };
