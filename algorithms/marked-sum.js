"use strict"

console.log('Marked sum of minimals challenge:');
console.log('---------------------------------------------------------------');

/**
 * what was the problem again?
 * 
 * 3 times, mark minimum (first index), mark adjascent numbers (cannot pick)
 * 
 * [4, 1, 3, 2, 7, 6, 5]
 * 
 * 1 mark 4, 3;
 * 2 mark 7 (3 already marked)
 * 5
 * return 8
 * 
 */

const testCases = {
    "Main test case (8)": [4, 1, 3, 2, 7, 6, 5],
    "Minimal test case (1)": [1],
    "Minimal test case 2 (1)": [4, 1, 3],
    "Negatives": [4, 1, 3, 9, -5, -2, 1, -7],
    "Repeated": [4, -7, 3, -7, -5, -7, -7]
}

// we know arr.length > 0           OK  
const findMinimal = (arr) => {
    let minimal = arr[0];
    arr.forEach(element => {
        if (element < minimal)
            minimal = element;
    });
    return minimal;
}

// we know it's there               OK
const findMinimalIndex = (arr, min) => {
    return arr.findIndex(element => element === min);
}

// whatever if we mark unnecessarely, shouldn't be a problem    OK
const markAdjascentIndexes = (i, marked) => {
    marked[i - 1] = true;
    marked[i] = true;
    marked[i + 1] = true;
}

const doShit = (values) => {
    let finalSum = 0;

    const markedIndexes = {};

    const minimal = findMinimal(values);
    const minimalIndex = findMinimalIndex(values, minimal);
    console.log(minimalIndex);
    markAdjascentIndexes(minimalIndex, markedIndexes)
    console.log(markedIndexes);

    finalSum = minimal;

    return finalSum;
}

for (const testCaseName in testCases) {
    console.log(testCaseName + ' : ' + testCases[testCaseName]);
    console.log('Your result : ' + doShit(testCases[testCaseName]));
    console.log('---------------------------------------------------------------');
}

