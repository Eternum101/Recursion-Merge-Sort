// Iteration Function
function fibs(n) {
    let array = [];

    for (let i = 0; i < n; i++) {
        if ((array[0] == null) || (array[1] == null)) {
            array.push(i);
        } else {
            let fibNumber = array[array.length - 1] + array[array.length - 2];
            array.push(fibNumber);
        };
    };
    console.log(array);
}

fibs(8);

// Recursive Function
function fibsRec(length) {
    if (length < 1 || isNaN(length)) return "Invalid Entry";

    if (length === 1) return [0];

    if (length === 2) return [0, 1];

    return [...fibsRec(length - 1), fibsRec(length - 1), fibsRec(length - 2) + fibsRec(length - 1) [length - 3]];
}

console.log(fibsRec(8));