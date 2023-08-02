var longestValidParentheses = function(s) {
    let result = 0;
    let idx = 0;
    while(s) {
        let current = s.charAt(idx);
        if (current === '(') {
            let slice = '';
            for (let i=idx+1; i<s.length; i++) {
                if (s.charAt(i) === ')') {
                    slice = s.substr(0, i+1); // slice
                    s = s.substr(i); // rest
                    console.log(slice);
                    if (slice.length === 2)
                        result += 2;
                    else if (slice.length === 4)
                        result += 4;
                    break;
                }
            }

            // if (slice.length > 2) {
            //     result += longestValidParentheses(slice);
            // }
        } else {
            s = s.substr(1);
        }
    }
    return result;
};

// const input = '()()'; // 4
const input = '(())'; // 4
// const input = ')())()'; // 2
const result = longestValidParentheses(input);
console.log('result', result);
