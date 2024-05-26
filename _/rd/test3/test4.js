function printZigZag() {
  const maxLine = 10000000;
  let minNumber = 0;
  // 총 5개의 행을 출력하는 for문
  for (let i = 1; i <= maxLine; i++) {
    let data = [];
    for (let j = 1; j <= maxLine; j++) {
      minNumber += 1;
      data.push(minNumber);
    }
    
    // 짝수일 경우 배열을 reverse시킨다.
    if (i % 2 === 0) {
      data.reverse();
    }

    console.log(data.toString());
  }
}

printZigZag();