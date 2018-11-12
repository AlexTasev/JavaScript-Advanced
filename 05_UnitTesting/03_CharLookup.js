let expect = require('chai').expect;
let assert = require('chai').assert;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe("lookupChar function tests", function () {
    it('should return undefind with non-string first parameter', function () {
        expect(lookupChar(15,5)).equal(undefined);
        assert.equal(lookupChar((15,5), undefined))
    });
    it('should return undefind with non-number second parameter', function () {
        expect(lookupChar("someString", "alabala")).equal(undefined)
    });
    it('should return undefind with non-integer second parameter', function () {
        expect(lookupChar("someString", 15.55)).equal(undefined)
    });
    it('should return Incorrect index if index is out of range', function () {
        expect(lookupChar("someString", 155)).equal("Incorrect index")
    });
    it('should return Incorrect index if index is negative number', function () {
        expect(lookupChar("someString", -2)).equal("Incorrect index")
        assert.equal(lookupChar("something", 15), "Incorrect index");
    });
    it('should return S at index 4', function () {
        expect(lookupChar("someString", 4)).equal("S")
    });
    it('should return s at index 0', function () {
        expect(lookupChar("someString", 0)).equal("s")
    });
    it('should return "g" at last index', function () {
        expect(lookupChar("someString", 9)).equal("g");
        assert.equal(lookupChar("something", 8), "g")
    });
});