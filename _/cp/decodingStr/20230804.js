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
 * Complete the 'decodeString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
/*
aaaaaaaaabcbcbc

aaaa2[c]a2[c]a2[c]
->
accaccacc
*/
function decodeString(s) {

    function dp(s) {
        // Terminate
        if (s.indexOf('[') === -1) {
            console.log('### ', s);
            return s;
        }

        // 1. string > array
        s = s.split('');

        const stack = [];
        while (s.length > 0) {
            const current = s[0];

            // 숫자일 경우 -> stack 에 담고 continue
            if (Number.isInteger(parseInt(current))) {
                stack.push(parseInt(current));
                s.shift();
                continue;
            }

            // Braclet 일 경우
            else if (current === '[') {
                let braceletCnt = 1;
                for (let i=1; i<s.length; i++) {
                    if (s[i] === '[') {
                        braceletCnt++;
                    }

                    if (s[i] === ']') {
                        if (braceletCnt > 1) {
                            braceletCnt--;
                            continue;
                        } else {
                            braceletCnt = 0;

                            // 문자열 추출 & break;
                            const item = s.splice(0, i + 1);
                            console.log('item', item);
                            // s.shift();
                            // s.pop();
                            stack.push(item.join('').replace('[', '').replace(']', ''));
                            break;
                        }
                    }
                }
            }

            // 영문자일 경우 - stack 에 담고 continue
            else {
                stack.push(current);
                s.shift();
                continue;
            }
        }

        // const str = stack.
        // [3, aa, 2, cc] => aaaaaabbbb
        // a a a 3 bb 2 abc
        console.log('stack: ', stack);
        // console.log(new Array(parseInt(3)).fill('aa'));
        let str = '';
        while (stack.length > 0) {
            const item = stack.shift();
            // 숫자 + 영문자 -> 모두 제거
            if (Number.isInteger(parseInt(item))) {
                str += new Array(parseInt(item) - 1).fill(stack[0]).join('');
            } else {
                str += item;
            }
        }

        return dp(str);
    }

    // 2. Recursive
    return dp(s);
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = decodeString(s);

    ws.write(result + '\n');

    ws.end();
}














