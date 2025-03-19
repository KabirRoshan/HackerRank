// https://www.hackerrank.com/challenges/new-year-chaos/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

'use strict';

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
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
    const tooChaotic = "Too chaotic";
    let totalBribes = 0;
    
    for (let current_pos = 0; current_pos < q.length; current_pos++) {
        const original_pos = q[current_pos] - 1;
        
        const diff = original_pos - current_pos;
        
        if (diff > 2) return console.log(tooChaotic);
        
        if (diff <= 0) {
            for (let i = Math.max(0, original_pos - 1); i < current_pos; i++) {
                const start_pos_of_forward_person = q[i] - 1;
                
                if (start_pos_of_forward_person > original_pos) {
                    totalBribes++;
                }
            }
        }
    }
    
    console.log(totalBribes);
}

function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const q = readLine().replace(/\s+$/g, '').split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
