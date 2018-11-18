let SubscriptionCard = require("./02_SubscriptionCard");
let expect = require("chai").expect;
let assert = require("chai").assert;

describe("Unit Tests on SubscriptionCard class", function () {
    describe("Check own properties of SubscriptionCard", function () {
        it('Prototype has own properties', function () {
            expect(SubscriptionCard.prototype.hasOwnProperty("firstName"));
            expect(SubscriptionCard.prototype.hasOwnProperty("lastName"));
            expect(SubscriptionCard.prototype.hasOwnProperty("SSN"));
            expect(SubscriptionCard.prototype.hasOwnProperty("isBlocked"));
            expect(SubscriptionCard.prototype.hasOwnProperty("isValid"));
        });
    });
    describe("Create instance of the class", function () {
        it("Instance should be created with valid data", function () {
            let card = new SubscriptionCard("Gosho", "Peshev", "123456");
            expect(card.firstName).equal("Gosho");
            expect(card.lastName).equal("Peshev");
            expect(card.SSN).equal("123456");
            expect(card.isBlocked).equal(false);
        });
        it('Instance should be created with undefined properties if constructor is empty', function () {
            let card = new SubscriptionCard();
            expect(card.firstName).equal(undefined);
            expect(card.lastName).equal(undefined);
            expect(card.SSN).equal(undefined);
            expect(card.isBlocked).equal(false);
        });
    });
    describe("Properties can not be changed", function () {
        it('Should not be allowed to change properties', function () {
            let card = new SubscriptionCard("Gosho", "Peshev", "123456");
            assert.isSealed(card.firstName, true);
            assert.isSealed(card.lastName, true);
            assert.isSealed(card.SSN, true);
            card.firstName = "Stamat";
            card.lastName = "Goshev";
            card.SSN = "0000";
            expect(card.firstName).equal("Gosho");
            expect(card.lastName).equal("Peshev");
            expect(card.SSN).equal("123456");
        });
    });
    describe("Check functionality", function () {
        let card;
        beforeEach(function () {
            card = new SubscriptionCard("Stamat", "Peshev", "123456");
        });
        it('addSubscription and isValid functions should add data and return true', function () {
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid("120", new Date("2018-04-22"))).equal(true);
            expect(card.isValid("310", new Date("2018-04-22"))).equal(true);
        });
        it('addSubscription and isValid functions should add data and return false', function () {
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid("120", new Date("2018-04-20"))).equal(false);
            expect(card.isValid("310", new Date("2018-04-25"))).equal(false);
        });
        it('Test block function, should return false when card is blocked', function () {
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.block();
            expect(card.isBlocked).equal(true);
            expect(card.isValid("120", new Date("2018-04-22"))).equal(false);
        });
        it('Test unblock function, should return true', function () {
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.block();
            expect(card.isBlocked()).equal(true);
            expect(card.isValid("120", new Date("2018-04-22"))).equal(false);
            card.unblock();
            expect(card.isBlocked).equal(false);
            expect(card.isValid("120", new Date("2018-04-22"))).equal(true);
        });
    });
});
// 90 %