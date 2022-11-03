function missingNumbers(arr) {
    let missing = [];
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    for (let i = min; i <= max; i++) {
        if (!arr.includes(i)) {
            missing.push(i);
        }
    }
    return missing;
}

const arr = [1, 2, 3, 4, 6, 7, 10];

console.log("Original array is ", arr);

console.log("Missing numbers are ", missingNumbers(arr));