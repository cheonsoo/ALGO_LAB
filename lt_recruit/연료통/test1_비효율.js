/*
n: 3, route: [[1,2,1],[1,3,4],[2,3,2]], result: 2
*/

/*
n: 5
route: [[5, 1, 15], [4, 2, 6], [1, 4, 8], [3, 2, 10], [1, 2, 7], [5, 4, 6], [2, 5, 5]]
result: 7

Case 1)
[1, 4, 8]
[4, 2, 6]
[2, 5, 5]
[5, 1, 5]
Distance = 24
GasTank = 8

Case 2)
[5, 1, 15]
Distance = 15
GasTank = 15

Case 3)
[1, 2, 7]
[2, 5, 5]
Distance = 12
Gas Tank = 7

Case 4)
[1, 2, 7]
[2, 4, 6]
[4, 5, 6]

*/
/*

*/
const start = new Date().getTime();

function solution(n, route) {

  function convert() {
    route = route.map(item => ({
      s: Math.min(item[0], item[1]),
      d: Math.max(item[0], item[1]),
      w: item[2]
    }));
  }

  function run(currentNode, _route, path) {
    if (path[path.length - 1].d === n) {
      stack.push(path);
      // console.log(`arrived: ${JSON.stringify(currentNode)}, path: ${JSON.stringify(path)}`);
      return;
    }

    if (!_route || _route.length == 0) {
      return;
    }

    for (let i=0; i<_route.length; i++) {
      const nextNode = _route[i];
      if (currentNode.d === nextNode.s) {
        const _path = path.concat([nextNode]);

        // console.group();
        // console.log(`currentNode: ${JSON.stringify(currentNode)}`);
        // console.log(`nextNode: ${JSON.stringify(nextNode)}`);
        // console.log(`path: ${JSON.stringify(path)}`);
        // console.groupEnd();

        run(nextNode, _route.filter((item, idx) => idx !== i), _path);
      }
    }

  }

  let node = {
    s: 0,
    d: 1,
    w: 0
  };
  const stack = [];

  convert();

  for (let i=0; i<route.length; i++) {
    const nextNode = route[i];
    if (node.d === nextNode.s) {
      const path = [node, nextNode];
      const _route = route.filter((item, idx) => idx !== i)
      run(nextNode, _route, path);
    }
  }

  const largestGasTank = stack.map(item => {
    item.sort((a, b) => b.w - a.w);
    return item[0].w;
  });

  return largestGasTank.sort((a, b) => a - b)[0];
};

// const n = 3; // result: 2
// const route = [[1, 2, 1], [1, 3, 4], [2, 3, 2]];

const n = 5; // result: 7
const route = [[5, 1, 15], [4, 2, 6], [1, 4, 8], [3, 2, 10], [1, 2, 7], [5, 4, 6], [2, 5, 5]];

const result = solution(n, route);
console.log(`### [exe time: ${new Date().getTime() - start} ms] result: ${result}`);
