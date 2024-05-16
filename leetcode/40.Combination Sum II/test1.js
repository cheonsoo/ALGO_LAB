/*
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.
*/


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    // write code here
    const res = [];
    const path = [];
    candidates.sort((a, b) => a - b);
    const backtracking = (target, sum, startIndex) => {
        if (sum > target) {
            return;
        }
        if (sum === target) {
            res.push([...path]);
            return;
        }
        for (let i = startIndex; i < candidates.length; i++) {
            if (i > startIndex && candidates[i] === candidates[i - 1]) {
                continue;
            }
            path.push(candidates[i]);
            backtracking(target, sum + candidates[i], i + 1);
            path.pop();
        }
    };

    backtracking(target, 0, 0);
    return res;
};

const candidates = [10,1,2,7,6,1,5], target = 8;
const result = combinationSum2(candidates, target); // [[1,1,6],[1,2,5],[1,7],[2,6]]
// loop result and print each array
for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}
