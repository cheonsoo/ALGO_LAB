var countAndSay = function (n) {
  function dfs(n) {
    if (n === 1) return 1
    return say(dfs(n - 1))
  }

  function say(num) {
    return Array.from(`${num}`)
      .reduce((acc, cur) => {
        if (acc.length === 0) {
          acc.push(1, cur)
        } else {
          if (cur === acc[acc.length - 1]) acc[acc.length - 2]++
          else acc.push(1, cur)
        }
        return acc
      }, [])
      .join('')
  }

  return `${dfs(n)}`
}

// const input = '4';
const input = '5';

const result = countAndSay(input);
console.log(`### result: ${result}`);