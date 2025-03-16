// https://www.hackerrank.com/challenges/repeated-string/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

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
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters: 
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

// My original plan but this is not good for large values of n.
// function repeatedString(s, n) {
//     let countA = new Map();
//     let finalCount = 0;
//     let index = 0;
    
//     while (countA.size < n) {
//         for (let i = 0; i < s.length; i++) {
//             if (countA.size == n) {
//                 break;
//             } else {
//                 countA.set(index++, s[i]);
//             }
//         }
//     }
    
//     for (const character of countA.values()) {
//         if (character == 'a') {
//             finalCount++;
//         }
//     }
    
//     return finalCount;
// }

// slice and split string
function repeatedString(s, n) {
    let occurances = (s.split('a').length - 1);
    let max = Math.floor(n / s.length);
    let totalAs = occurances * max;
    totalAs += (s.slice(0, n % s.length).split('a').length - 1);
    return totalAs;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine().trim(), 10);

    const result = repeatedString(s, n);

    ws.write(result + '\n');

    ws.end();
}
