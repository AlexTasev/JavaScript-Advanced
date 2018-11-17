let PaymentPackage = require('./PaymentPackageClass');
let expect = require('chai').expect;

describe("PaymentPackage class tests", function () {
    describe("Test initialization and default values of properties", function () {
        let package;
        beforeEach(() => {
            package = new PaymentPackage("Consultation", 1500);
        });
        it('An instance should has 4 own properties', function () {
            expect(package).hasOwnProperty("name");
            expect(package).hasOwnProperty("value");
            expect(package).hasOwnProperty("VAT");
            expect(package).hasOwnProperty("active");
        });
        it('An instance should be initialized with name and value', function () {
            expect(package.name).eql("Consultation");
            expect(package.value).eql(1500);
        });
        it('Default values of VAT and active should be 20 and true', function () {
            expect(package.VAT).eql(20);
            expect(package.active).eql(true);
        });
    });
    describe("Test getters and setters", function () {
        let package;
        beforeEach(() => {
            package = new PaymentPackage("Consultation", 1500);
        });
        it('With name different than string should throw an error', function () {
            expect(() => package.name = 123).to.throw();
        });
        it('With name different than string should throw an error', function () {
            expect(() => package.name = "").throw();
        });
        it('With string as value should throw an error', function () {
            expect(()=> package.value = "abc").throw();
        });
        it('With negative value should throw an error', function () {
            expect(()=> package.value = -15).throw();
        });
        it('With valid VAT should set a VAT', function () {
            expect(package.VAT = 35).eql(35);
        });
        it('With string as VAT should throw an error', function () {
            expect(()=> package.VAT = "abc").throw();
        });
        it('With negative value, VAT should throw an error', function () {
            expect(()=> package.VAT = -15).throw();
        });
        it('With non boolean property "active" should throw an error', function () {
            expect(() => package.active = "something").throw();
        });
        it('With boolean property "active" should be set correctly', function () {
            expect(package.active = false).eql(false);
        });
    });
    describe("Test 'toString method'", function () {
        it('toString method should return string, when called with valid values', function () {
            let otherPackage = new PaymentPackage("Consultation", 1500);
            expect(otherPackage.toString())
                .eql("Package: Consultation\n" +
                    "- Value (excl. VAT): 1500\n" +
                    "- Value (VAT 20%): 1800");
        });
        it('toString method should append "inactive", when called with valid values', function () {
            let otherPackage = new PaymentPackage("Consultation", 1500);
            otherPackage.active = false;
            expect(otherPackage.toString())
                .eql("Package: Consultation (inactive)\n" +
                    "- Value (excl. VAT): 1500\n" +
                    "- Value (VAT 20%): 1800");
        });
    });
});

//  90 %