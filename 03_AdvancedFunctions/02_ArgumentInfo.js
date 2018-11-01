function typesInfo() {
    let result = new Map();
    for (let i = 0; i < arguments.length; i++) {
        let type = typeof arguments[i];
        if (!result.has(type)) {
            result.set(type, 0);
        }
        let count = result.get(type);
        result.set(type, count + 1);

        console.log(`${type}: ${arguments[i]}`)
    }

    [...result]
        .sort((a, b) => {
            return b[1] - a[1]
        })
        .forEach((x) => {
            console.log(`${x[0]} = ${x[1]}`)
        });
}

typesInfo('cat', 15, 42, function () {
    console.log('Hello world!');
});