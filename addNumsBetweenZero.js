const addNumsBetweenZero = (nums) => {
  let newNums = [];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (nums[i] == 0 && i !== 0) {
      newNums.push(sum);
      sum = 0;
    }
  }
  return newNums;
};

console.log(addNumsBetweenZero([0, 3, 1, 0, 4, 5, 2, 0]));
console.log(addNumsBetweenZero([0, 1, 0, 3, 0, 2, 2, 0]));
