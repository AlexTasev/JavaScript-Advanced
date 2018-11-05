Array.prototype.last = function () {
    return this[this.length - 1];
};

Array.prototype.skip = function (numberOfElementsToSkip) {
    let result = [];
    for (let i = numberOfElementsToSkip; i < this.length; i++) {
        result.push(this[i]);
    }
    return result;
};

Array.prototype.take = function (numberOfElementsToTake) {
    let result = [];
    for (let i = 0; i < numberOfElementsToTake; i++) {
        result.push(this[i]);
    }
    return result
};

Array.prototype.sum = function () {
    let result = 0;
    for (let i = 0; i < this.length; i++) {
        result += this[i];
    }
    return result;
};

Array.prototype.average = function () {
    let result = this.sum() / this.length;
    return result;
};

// check new functions:
function check(input) {
    console.log(input.last());
    console.log(input.skip(3));
    console.log(input.take(2));
    console.log(input.sum());
    console.log(input.average());
}

check([1, 2, 3, 4, 9]);

// for judge:
(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (numberOfElementsToSkip) {
        let result = [];
        for (let i = numberOfElementsToSkip; i < this.length; i++) {
            result.push(this[i]);
        }
        return result;
    };

    Array.prototype.take = function (numberOfElementsToTake) {
        let result = [];
        for (let i = 0; i < numberOfElementsToTake; i++) {
            result.push(this[i]);
        }
        return result
    };

    Array.prototype.sum = function () {
        let result = 0;
        for (let i = 0; i < this.length; i++) {
            result += this[i];
        }
        return result;
    };

    Array.prototype.average = function () {
        let result = this.sum() / this.length;
        return result;
    };
})();