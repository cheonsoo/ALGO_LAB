function solution(M, load) {
  load.sort((a, b) => b - a);

  if (load[0] > M) return -1;

  if (load.length === 1) return 1;

  const arr = [];
  const arrStack = [];

  while (load.length > 0) {
    const current = load.shift();
    const rest = load.filter(item => item <= M - current);

    console.log(`### current: ${current}`);
    console.log(`### load: ${load}`);
    console.log(`### rest: ${rest}`);

    let sum = 0;
    let sumStack = [];
    sum = current;
    sumStack.push(current);

    if (rest.length > 0) {
      for (let i=0; i<rest.length; i++) {
        if (sum + rest[i] <= M) {
          sum += rest[i];
          sumStack.push(rest[i]);
          load.splice(load.lastIndexOf(rest[i]), 1);
        } else if (sum + rest[i] > M) {
          break;
        }
      }
    }

    arr.push(sum);
    arrStack.push(sumStack.join("@@"));
  }

  console.log(arr);
  console.log(arrStack);

  return arr.length === 0 ? -1 : arr.length;
}

// const M = 10;
// const load = [10]; // result: 1

// const M = 10;
// const load = [12]; // result: -1

// const M = 10;
// const load = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 8, 2];

// const M = 40;
// const load = [37, 39, 30, 29, 28, 27, 26, 25, 24, 23, 3, 1]; // result: 10

// const M = 10;
// const load = [2,3,7,8]; // result: 2

// const M = 5;
// const load = [2,2,2,2,2]; // result: 3

// const M = 20;
// const load = [16,15,9,17,1,3]; // result: 4

// const M = 40;
// const load = [39,39,38,1,1,1,36,1,1,1,1,1];

// const M = 40;
// const load = [40,39,38,1,1,1,36,1,1,1,1,1,2];

// const M = 20;
// const load = [20,20,20,20,20,20,20,20,20,20,20,20,20,20,20];

// const M = 20;
// const load = [16,15,9,17,1,3, 3, 5, 6, 9, 2, 2, 2, 2, 2, 3, 2, 2, 1]; // result: 4

// const M = 31, load = [2,23,22,7,5,3];
const M = 11, load = [3,2,4,5,8];

const result = solution(M, load);
console.log(`### result: ${result}`);



/*
20
[16,15,9,17,1,3]
> [17,16,15,9,3,1]
[17,3] [16,15,9,1]
[17,3][16,1] [15,9]
[17,3][16,1][15][9]


truckCnt = 1
current = 17+16-16

15


*/