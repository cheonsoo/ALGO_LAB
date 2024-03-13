
/*
()())()

)())() - x
(())()
())() - x
()()()
()())) - x
()())( - x
*/

/*
()))(

 )))(, ( ))(



bfs(input, case = [()]) {
    // terminate
        !input return;

    loop
        dfs(input.splice(i, 1), case.concat(')'));
}

check stack
    filter

return;





*/

var isValid = function(s) {
    const kind = ['(', '{', '['];
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    const stack = [];

    for (let i=0; i<s.length; i++) {
        const current = s[i];
        if (kind.indexOf(current) !== -1) {
            stack.push(current);
        } else {
            if (brackets[current] === stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    if (stack.length === 0)
        return true;
    else
        return false;
  };

function removeInvalidParentheses(s) {


    function bfs(arr = []) {
        if (!arr.length) {
            return;
        }

        if (arr.length > 1)
            result.push(arr.join(''));

        for (let i=0; i<arr.length; i++) {
            bfs(arr.filter((item, idx) => idx != i));
        }
    }

    let result = [];
    bfs(s.split(''), "");

    result = Array.from(new Set(result));
    console.log(result);

    // Validation
    result = result.filter(item => isValid(item));

    console.log(result);

    return null;
}

// const input = "())))";
const input = "()())()";

const result = removeInvalidParentheses(input);
console.log(`### result: `, result);
