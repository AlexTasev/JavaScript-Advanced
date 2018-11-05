function modifyCar(initialCarParts) {
    let modifiedCar = {};
    modifiedCar.model = initialCarParts.model;
    let engine;
    if (initialCarParts.power <= 90) {
        engine = {
            power: 90,
            volume: 1800
        };
    } else if (initialCarParts.power <= 120) {
        engine = {
            power: 120,
            volume: 2400
        }
    } else {
        engine = {
            power: 200,
            volume: 3500
        }
    }

    modifiedCar.engine = engine;

    modifiedCar.carriage = {
        type: initialCarParts.carriage,
        color: initialCarParts.color
    };

    if (initialCarParts.wheelsize % 2 === 0) {
        initialCarParts.wheelsize -= 1;
    }
    let wheels = [];
    for (let i = 0; i < 4; i++) {
        wheels.push(initialCarParts.wheelsize);
    }

    modifiedCar.wheels = wheels;
    return modifiedCar;
}

console.log(modifyCar({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));