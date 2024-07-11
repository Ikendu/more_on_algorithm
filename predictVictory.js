const predictVictory = (senate) => {
  let radient = [];
  let dire = [];
  let n = senate.length;

  for (let i = 0; i < n; i++) {
    if (senate[i] === `R`) {
      radient.push(i);
    } else {
      dire.push(i);
    }
  }
  while (radient.length > 0 && dire.length > 0) {
    if (radient[0] < dire[0]) {
      radient.push(radient[0] + n);
    } else {
      dire.push(dire[0] + n);
    }
    radient.shift();
    dire.shift();
  }
  return { radient, dire };
};

console.log(predictVictory(["R", "R", "R", "D", "D", "D", "D"]));
