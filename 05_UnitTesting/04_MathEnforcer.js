let expect = require('chai').expect;
let assert = require('chai').assert;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe("mathEnforcer function tests", function () {
    describe("addFive tests", function () {
        it('parameter is not a number, should return "undefined"', function () {
            expect(mathEnforcer.addFive("notANumber")).equal(undefined);
            expect(mathEnforcer.addFive({})).equal(undefined);
            expect(mathEnforcer.addFive([1, 2, 3])).equal(undefined);
            assert.equal(mathEnforcer.addFive([1, 2, 3]), undefined)
        });
        it('parameter is a number, should add 5 to number ', function () {
            expect(mathEnforcer.addFive(10)).equal(15);
            expect(mathEnforcer.addFive(-10)).equal(-5);
            expect(mathEnforcer.addFive(2.5)).equal(7.5);
            assert.equal(mathEnforcer.addFive(2.5), 7.5);
        });
    });
    describe("subtractTen tests", function () {
        it('parameter is not a number, should return "undefined"', function () {
            expect(mathEnforcer.subtractTen("notANumber")).equal(undefined);
            expect(mathEnforcer.subtractTen({})).equal(undefined);
            expect(mathEnforcer.subtractTen([1, 2, 3])).equal(undefined);
            assert.equal(mathEnforcer.subtractTen({}), undefined);
        });
        it('parameter is a number, should subtract 10 from number ', function () {
            expect(mathEnforcer.subtractTen(10)).equal(0);
            expect(mathEnforcer.subtractTen(-10)).equal(-20);
            expect(mathEnforcer.subtractTen(22.5)).equal(12.5);
            assert(mathEnforcer.subtractTen(22.5), 12.5)
        })
    });
    describe("sum tests", function () {
        it('one of parameters is not a number, should return "undefined"', function () {
            expect(mathEnforcer.sum("notANumber", 3)).equal(undefined);
            expect(mathEnforcer.sum(99, "notANumber")).equal(undefined);
            expect(mathEnforcer.sum(12, {})).equal(undefined);
            expect(mathEnforcer.sum([1, 2, 3], 5)).equal(undefined);
            assert.equal(mathEnforcer.sum([1, 2, 3], 5), undefined);
        });
        it('both params are numbers, should return their sum', function () {
            expect(mathEnforcer.sum(10, 5)).equal(15);
            expect(mathEnforcer.sum(-10, -20)).equal(-30);
            expect(mathEnforcer.sum(-10, 35)).equal(25);
            expect(mathEnforcer.sum(22.5, 10.5)).equal(33);
            assert(mathEnforcer.sum(22.5, 10.5), 33);
        });
    });
});