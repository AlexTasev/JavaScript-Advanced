let expect = require('chai').expect;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('isOddOrEven function tests', function () {
    it('should return undefined if input is not string', function () {
        expect(isOddOrEven(123)).equal(undefined);
        expect(isOddOrEven([])).equal(undefined);
        expect(isOddOrEven({})).equal(undefined);
    });
    it('should return "odd" if string.lenght is odd number', function () {
        expect(isOddOrEven("ala")).equal("odd");
    });
    it('should return "even" if string.lenght is even number', function () {
        expect(isOddOrEven("abba")).equal("even");
    });
});