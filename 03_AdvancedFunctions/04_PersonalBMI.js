function BMI() {
    [name, age, weight, height] = arguments;
    let heightInM = height / 100;
    let bmi = weight / Math.pow(heightInM, 2);
    let status;
    if (bmi < 18.5) {
        status = "underweight";
    } else if (bmi < 25) {
        status = "normal";
    } else if (bmi < 30) {
        status = "overweight";
    } else {
        status = "obese";
    }
    let person = {
        name,
        personalInfo: {
            age,
            weight,
            height
        },
        BMI: Math.round(bmi),
        status
    };

    if (status === "obese") {
        person.recommendation = 'admission required';
    }

    return person;
}

console.log(BMI("Alex", 31, 70, 186));