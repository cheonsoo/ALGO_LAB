/*
*/

// 아래 솔루션을 시간 복잡도를 고려하여 최적화 하세요.
const rotate90 = (matrix) => {
    const converted = [...Array(matrix.length)].map(() => Array(matrix.length).fill(0));
    const m = matrix.length - 1;
    for (let y = 0; y <= m; y++) {
        for (let x = 0; x <= m; x++) {
            converted[x][m - y] = matrix[y][x];
        }
    }

    return converted;
};

function solution(matrix, r) {
    var answer = [[]];

    answer = matrix;
    for (let i=0; i<r; i++) {
        answer = rotate90(answer);
    }

    return answer;
}

// const matrix = [
//     [1, 2],
//     [3, 4]
// ]; // [[3, 1], [4, 2]]
// const r = 1;

// const matrix = [
//     [1, 2],
//     [3, 4]
// ]; // [[4, 3], [2, 1]]
// const r = 2;

const matrix = [
    [4, 1, 2],
    [7, 3, 4],
    [3, 5, 6]
]; // [[2, 4, 6], [1, 3, 5], [4, 7, 3]]
const r = 3;

const result = solution(matrix, r);
console.log(result.forEach(row => console.log(row.join(' '))));
