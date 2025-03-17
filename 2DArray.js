// https://www.hackerrank.com/challenges/2d-array/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    let maxSum = -63;
    
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let top = arr[i][j] + arr[i][j+1] + arr[i][j+2];
            let mid = arr[i+1][j+1];
            let bot = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
            let currentSum = top + mid + bot;
            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
            // or use maxSum = Math.max(maxSum, currentSum);
        }
    }
    return maxSum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = hourglassSum(arr);

    ws.write(result + '\n');

    ws.end();
}
