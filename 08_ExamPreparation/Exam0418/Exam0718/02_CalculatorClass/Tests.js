let Calculator = require("./Calculator");
let expect = require("chai").expect;
let assert = require("chai").assert;

describe("Calculator class tests", function () {
    let calculator;
    beforeEach(function () {
        calculator = new Calculator();
    });
    describe("Test initialization and property", function () {
        it('calculator should be initialized and have one property', function () {
            expect(calculator.expenses).eql([]);
            expect(calculator).hasOwnProperty("expenses")
        });
    });
    describe("add function tests", function () {
        it('add function should add numbers to expenses array', function () {
            calculator.add(10);
            calculator.add(12.5);
            calculator.add(15.5);
            expect(calculator.expenses).eql([10, 12.5, 15.5]);
        });
        it('add function should add any type to expenses array', function () {
            calculator.add("Pesho");
            calculator.add([]);
            calculator.add({});
            expect(calculator.expenses).eql(["Pesho", [], {}]);
        });
    });
    describe("devideNums function tests", function () {
        it('devideNums function should divide only numbers in the expenses array', function () {
            calculator.add(10);
            calculator.add("Pesho");
            calculator.add(5);
            expect(calculator.divideNums()).eql(2);
        });
        it('devideNums function should work with floating point numbers', function () {
            calculator.add(10.5);
            calculator.add("Pesho");
            calculator.add(5.2);
            expect(calculator.divideNums()).to.be.closeTo(2.019, 0.01);
        });
        it('devideNums function should throw error if no numbers in the array', function () {
            calculator.add("Gosho");
            calculator.add("Pesho");
            calculator.add("Stamat");
            expect(() => calculator.divideNums()).throw("There are no numbers in the array!");
        });
        it('devideNums function should throw error- divide by zero', function () {
            calculator.add(10.5);
            calculator.add(0);
            calculator.add(5.2);
            expect(calculator.divideNums()).eql("Cannot divide by zero");
        });
    });
    describe("toString function tests", function () {
        it('toString should return correct string', function () {
            calculator.add(10);
            calculator.add("Pesho");
            calculator.add(5);
            expect(calculator.toString()).eql("10 -> Pesho -> 5")
        });
        it('toString should return correct string', function () {
            expect(calculator.toString()).eql('empty array')
        });
    });
    describe("orderBy function tests", function () {
        it('orderBy should order numbers', function () {
            calculator.add(10.5);
            calculator.add(0);
            calculator.add(-5.2);
            expect(calculator.orderBy()).eql("-5.2, 0, 10.5")
        });
        it('orderBy should order mixedData', function () {
            calculator.add("Gosho");
            calculator.add("Alex");
            calculator.add({});
            expect(calculator.orderBy()).eql("Alex, Gosho, [object Object]")
        });
    });
});