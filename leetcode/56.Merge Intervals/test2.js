/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // Case 1
    // 1,3,2,6,8,10,15,18
    // 1,6,8,10,15,18
    // Case 2
    // 1,4,4,5
    // Case 3
    // 1,2,3,4,5,6,7,8
    // Case 4
    // 1,4,0,4
    // Case 5
    // 1,3, 2,6, 2,10, 15,18

    // intervals = [[1,3],[2,6],[8,10],[15,18]];

    // 겹치는 경우
    // [1,3], [2,6]
    // [1,4], [0,4]
    // [1,4], [0,3]
    // [2,3], [1,4]

    // 안겹치는 경우
    // [1,4], [0,0]

    let idx = 0;
    while(idx < intervals.length - 1) {
        const current = intervals[idx];
        const next = intervals[idx + 1];

        // 인터벌이 한자리인 경우
        if (current[0] === current[1] || next[0] === next[1]) {

        }

        // 겹칠경우
        let swapped = false;
        if (current[1] >= next[0]) {
            current[0] = Math.min(current[0], next[0]);
            current[1] = Math.max(current[1], next[1]);
            swapped = true;
        }

        if (swapped)
            intervals.splice(idx + 1, 1);
        else
            idx++;
    }

    return intervals;
};

// const intervals = [[1,3],[2,6],[8,10],[15,18]];
// const intervals = [[1,4],[0,4]];
const intervals = [[1,4],[0,0]];
const result = merge(intervals);
console.log(result);