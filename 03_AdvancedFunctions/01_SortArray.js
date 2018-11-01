function sortArray(arr, command) {
    let sortingStrategies = {
        "asc": ascendingOrder,
        "desc": descendingOrder
    };

    function ascendingOrder(a, b) {
        return a - b;
    }

    function descendingOrder(a, b) {
        return b - a;
    }

    return arr.sort(sortingStrategies[command]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'desc'));

