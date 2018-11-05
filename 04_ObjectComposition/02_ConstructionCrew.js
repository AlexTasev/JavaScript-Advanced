function fixWorker(worker) {
    if (worker.handsShaking) {
        worker.bloodAlcoholLevel += 0.1 * worker.experience * worker.weight;
        worker.handsShaking = false;
        return worker;
    } else {
        return worker;
    }
}

console.log(fixWorker({
    weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true
}));