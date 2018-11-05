(() => {
    String.prototype.ensureStart = function (string) {
        const currentStr = this.valueOf();
        if (currentStr.indexOf(string) === 0) {
            return currentStr;
        }
        return string += currentStr;
    };

    String.prototype.ensureEnd = function (string) {
        let currentStr = this.valueOf();
        let length = string.length;
        let lastElement = currentStr.substr(-length);
        if (string !== lastElement) {
            return currentStr += string
        }
        return currentStr;
    };

    String.prototype.isEmpty = function () {
        return this.valueOf().length === 0;
    };

    String.prototype.truncate = function (number) {
        if (number >= this.length) {
            return this.valueOf();
        }
        if (number < 4) {
            return ".".repeat(number);
        }
        if (!this.includes(" ")) {
            return this.substring(0, number - 3) + "..."
        }

        let tokens = this.split(" ");
        let result = tokens[0];

        for (let i = 1; i < tokens.length; i++) {
            if (result.length + tokens[i].length + 4 > number) {
                return result + "..."
            }
            result += " " + tokens[i];
        }
    };

    String.format = function () {
        let args = [...arguments];
        let str = args.shift();
        for (let i = 0; i < str.length; i++) {
            if (str.indexOf(`${i}`) !== -1 && args.length > 0) {
                str = str.replace(`{${i}}`, args.shift())
            }
        }
        return str
    }
})();


let str = 'my string'
str = str.ensureStart('my')
str = str.ensureStart('hello ')
str = str.truncate(16)
str = str.truncate(14)
str = str.truncate(8)
str = str.truncate(4)
str = str.truncate(2)
str = String.format('The {0} {1} fox', 'quick', 'brown');
str = String.format('jumps {0} {1}', 'dog');

