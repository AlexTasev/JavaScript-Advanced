function extensibleObject() {
    return {
        extend: function (templete) {
            for (let prop in templete) {
                if (templete.hasOwnProperty(prop)) {
                    if (typeof templete[prop] === "function") {
                        this.__proto__[prop] = templete[prop];
                    } else {
                        this[prop] = templete[prop];
                    }
                }
            }
        }
    };
}

let template = {
    name: "Pesho",
    age: 19,
    sex: "male",
    myFunc: function () {
        return true;
    }
};

let obj = extensibleObject();
obj.extend(template);
console.log(obj);
console.log(obj.__proto__);