let HolidayPackage = require("./HolidayPackage");
let expect = require('chai').expect;

describe("HolidayPackage tests", function () {
    let holidayPackage;
    beforeEach(function () {
        holidayPackage = new HolidayPackage("Italy", "Summer");
    });
    describe("Test initialization", function () {
        it('Instance should be initialized with two parameters', function () {
            expect(holidayPackage.destination).equal("Italy");
            expect(holidayPackage.season).equal("Summer");
        });
    });
    describe("Test insuranceIncluded getter and setter", function () {
        it('insuraneIncluded method should return false', function () {
            expect(holidayPackage.insuranceIncluded).equal(false);
        });
        it('insuraneIncluded method should return true', function () {
            holidayPackage.insuranceIncluded = true;
            expect(holidayPackage.insuranceIncluded).equal(true);
        });
        it('insuraneIncluded method should throw error', function () {
            expect(() => holidayPackage.insuranceIncluded = "").to.throw();
        });
    });
    describe("Test addVacationer function", function () {
        it('addVacationer should throw error', function () {
            expect(() => holidayPackage.addVacationer(1)).to.throw()
        });
        it('addVacationer should throw error', function () {
            expect(() => holidayPackage.addVacationer(" ")).to.throw()
        });
        it('addVacationer should throw error', function () {
            expect(() => holidayPackage.addVacationer("Stamat")).to.throw()
        });
        it('addVacationer should add correctly', function () {
            holidayPackage.addVacationer("Pesho Peshev");
            expect(holidayPackage.vacationers.join(" ")).equal("Pesho Peshev")
        });
    });
    describe("Test showVacationers function", function () {
        it('showVacationers should return error', function () {
            expect(holidayPackage.showVacationers()).equal("No vacationers are added yet")
        });
        it('showVacationers should be array if vacationers added corectly', function () {
            holidayPackage.addVacationer("Pesho Peshev");
            holidayPackage.addVacationer("Gosho Goshev");
            expect(holidayPackage.showVacationers()).equal("Vacationers:\nPesho Peshev\nGosho Goshev")
        });
    });
    describe("Test generateHolidayPackage method", function () {
        it('generateHolidayPackage should calculate price with no insurance', function () {
            holidayPackage.addVacationer("Pesho Peshev");
            holidayPackage.addVacationer("Gosho Goshev");
            expect(holidayPackage.generateHolidayPackage()).equal("Holiday Package Generated\n" +
                "Destination: Italy\n" +
                "Vacationers:\n" +
                "Pesho Peshev\n" +
                "Gosho Goshev\n" +
                "Price: 1000")
        });
        it('generateHolidayPackage should calculate price with no insurance', function () {
            holidayPackage.addVacationer("Pesho Peshev");
            holidayPackage.addVacationer("Gosho Goshev");
            holidayPackage.season ="Spring";
            expect(holidayPackage.generateHolidayPackage()).equal("Holiday Package Generated\n" +
                "Destination: Italy\n" +
                "Vacationers:\n" +
                "Pesho Peshev\n" +
                "Gosho Goshev\n" +
                "Price: 800")
        });
        it('generateHolidayPackage should calculate price with insurance', function () {
            holidayPackage.addVacationer("Pesho Peshev");
            holidayPackage.addVacationer("Gosho Goshev");
            holidayPackage.insuranceIncluded = true;
            expect(holidayPackage.generateHolidayPackage()).equal("Holiday Package Generated\n" +
                "Destination: Italy\n" +
                "Vacationers:\n" +
                "Pesho Peshev\n" +
                "Gosho Goshev\n" +
                "Price: 1100")
        });
        it('generateHolidayPackage should throw error', function () {
            expect(() => holidayPackage.generateHolidayPackage()).to.throw();
        });
    })
});