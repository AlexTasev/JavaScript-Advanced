(() => {
    let id = 0;
    return class Extensible {
        constructor() {
            this.id = id++;
        }
        extend(templete) {
            for (let prop in templete) {
                if (templete.hasOwnProperty(prop)) {
                    if (typeof templete[prop] === "function") {
                        Extensible.prototype[prop] = templete[prop];
                    } else {
                        this[prop] = templete[prop];
                    }
                }
            }
        }
    }
})();