const romans = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];

let input = 'MCMXCIV';

const arr = [];
let split = '';
while (input) {
  for (let i=0; i<romans.length; i++) {
    if (input.indexOf(romans[i]) >= 0) {
      split = input.substr(0, i + 1);
      console.log('split', split);
      input = input.replace(split, '');
      romans.splice(0, 1);
      break;
    }
  }
}