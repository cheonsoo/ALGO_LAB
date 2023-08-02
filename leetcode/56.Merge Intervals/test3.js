/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    console.log(`### sorted: ${intervals}`);

    let idx = 0;
    while(idx < intervals.length - 1) {
        const current = intervals[idx];
        const next = intervals[idx + 1];

        // 인터벌이 한자리인 경우
        if (current[0] === current[1] || next[0] === next[1]) {

        }

        // const start = Math.min(current[0], next[0]);
        // const end = Math.min(current[1], next[1]);

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
// const intervals = [[1,4],[0,0]];
// const intervals = [[0,0],[1,4]];
const intervals = [[1,4],[0,2],[3,5]]; // [[0,5]]
const result = merge(intervals);
console.log(result);