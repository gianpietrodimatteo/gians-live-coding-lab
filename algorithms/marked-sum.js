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
const findMinimal = (arr, markedIndexes) => {
    // TODO potential problem here with arr[0]
    let minimal = arr[0];
    arr.forEach((element, index) => {
        if (element < minimal && !markedIndexes[index])
            minimal = element;
    });
    return minimal;
}

// we know it's there               
const findMinimalIndex = (arr, min, markedIndexes) => {
    // Find the min factoring the marked indexes
    // return arr.findIndex(element => element === min);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === min && !markedIndexes[i])
            return i;
    }
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

    // const minimal = findMinimal(values, markedIndexes);
    // const minimalIndex = findMinimalIndex(values, minimal);
    // markAdjascentIndexes(minimalIndex, markedIndexes)
    // console.log({ minimal, minimalIndex, markedIndexes });

    // finalSum = minimal;

    for (let i = 0; i < 3; i++) {
        const minimal = findMinimal(values, markedIndexes);
        const minimalIndex = findMinimalIndex(values, minimal, markedIndexes);
        markAdjascentIndexes(minimalIndex, markedIndexes)
        console.log({ minimal, minimalIndex, markedIndexes });
        finalSum += minimal;
    }

    return finalSum;
}

for (const testCaseName in testCases) {
    console.log(testCaseName + ' : ' + testCases[testCaseName]);
    console.log('Your result : ' + doShit(testCases[testCaseName]));
    console.log('---------------------------------------------------------------');
}

