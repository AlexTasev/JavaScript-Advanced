let solution = (function () {
    function add(vectorOne, vectorTwo) {
        return [vectorOne[0] + vectorTwo[0], vectorOne[1] + vectorTwo[1]];
    }

    function multiply(vector, num) {
        return [vector[0] * num, vector[1] * num];
    }

    function length(vector) {
        return Math.sqrt(Math.pow(vector[0], 2) + Math.pow(vector[1], 2));
    }

    function dot(vectorOne, vectorTwo) {
        return vectorOne[0] * vectorTwo[0] + vectorOne[1] * vectorTwo[1];
    }

    function cross(vectorOne, vectorTwo) {
        return vectorOne[0] * vectorTwo[1] - vectorOne[1] * vectorTwo[0];
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross
    }
})();

console.log(solution.add([5.43, -1], [1, 31]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([2, 3], [2, -1]));
console.log(solution.cross([3, 7], [1, 0]));
