
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
()))))


dfs(input, case = [()]) {
    // terminate
        !input return;

    loop
        dfs(input.splice(i, 1), case.concat(')'));
}

check stack
    filter

return;





*/
function removeInvalidParentheses(s) {

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = removeInvalidParentheses(s);

    ws.write(result + '\n');

    ws.end();
}

