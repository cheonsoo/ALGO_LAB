function solution(name) {
  let sum = 0;
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let lenOfAlphabet = alphabet.length;
  let alphabetObj = {};
  for (let i=0; i<lenOfAlphabet; i++) {
    alphabetObj[alphabet[i]] = i;
  }
  // console.log(alphabetObj);

  for (let i=0; i<name.length; i++) {
    let letter = name[i].toLowerCase();
    if (letter === 'a') {
      sum++;
      continue;
    }

    let upper = alphabetObj[letter];
    let lower = lenOfAlphabet - alphabetObj[letter];
    sum += upper > lower ? lower : upper;

    if (i !== name.length-1)
      sum++;
  }

  return sum;
}

// const input = "JEROEN"; // 56
const input = "JAN"; // 23
const result = solution(input);
console.log(`### result: ${result}`);

// abcdefghijklmnopqrstuvwxyz