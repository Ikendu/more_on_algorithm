const longestOneAroundAZero = (nums) => {
  let checker = 0;
  let count = 0;
  let maxOne = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      maxOne = Math.max(maxOne, count);
      count = count - checker;
      checker = count;
    }
  }
  maxOne = Math.max(maxOne, count);
  return maxOne;
};

console.log(longestOneAroundAZero([0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1]));
