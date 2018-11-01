let manager = (function () {
    let robot = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
        recipes: {
            apple: {carbohydrate: 1, flavour: 2},
            coke: {carbohydrate: 10, flavour: 20},
            burger: {carbohydrate: 5, fat: 7, flavour: 3},
            omelet: {protein: 5, fat: 1, flavour: 1},
            cheverme: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
        },
        isEnough: function (product, quantity) {
            for (let ing in this.recipes[product]) {
                let neededQty = this.recipes[product][ing] * quantity;
                if (neededQty > this[ing]) {
                    return `Error: not enough ${ing} in stock`;
                }
            }
            for (let ing in this.recipes[product]) {
                this[ing] -= this.recipes[product][ing] * quantity;
            }
            return "Success"
        }
    };
    return function (input) {
        let commands = input.split(" ");
        if (commands[0] === "restock") {
            robot[commands[1]]+= +commands[2];
            return "Success";
        } else if (commands[0] === "prepare") {
            return robot.isEnough(commands[1], commands[2]);
        } else if(commands[0] === "report") {
            return `protein=${robot.protein} carbohydrate=${robot.carbohydrate} fat=${robot.fat} flavour=${robot.flavour}`
        }
    }
})();

console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));
