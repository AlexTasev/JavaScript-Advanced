let expect = require('chai').expect;
let assert = require('chai').assert;

function sumOfTwoNumbers(firsNum, secondNum) {
    let sum = firsNum + secondNum;
    return sum;
}

describe("sumOfTwoNumbers test", function () {
    it('sum of positive numbers', function () {
        expect(sumOfTwoNumbers(15, 30)).equal(45);
        assert.equal(sumOfTwoNumbers(15, 30), 45);
    });
    it('sum of negative numbers', function () {
        expect(sumOfTwoNumbers(-9, -7)).equal(-16)
    });
    it('sum of floating point numbers', function () {
        expect(sumOfTwoNumbers(5.5, 6.9)).equal(12.4)
    });
    it('sum of string and number', function () {
        expect(sumOfTwoNumbers('sasho', 15)).equal('sasho15')
    });
    it('sum of number and string', function () {
        expect(sumOfTwoNumbers(14, 'sasho')).equal('14sasho');
    });
});