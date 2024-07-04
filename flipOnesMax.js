//pending
const maxOnes = (nums, k) => {
  // early checking

  for (let i = 0; i < nums.length; i++) {
    let check = 0;
    if (nums[i] === 0) check++;
    if (check === k) return nums.length;
  }

  let count = 0;
  let num = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums = Math.max(nums, count);
    }
    count++;
  }
};

//EffNot understood at first
const longestOnes = (nums, k) => {
  let i = 0;
  let j = 0;

  for (; i < nums.length; i++) {
    if (nums[i] === 0) k--;
    if (k < 0) {
      if (nums[j] === 0) k++;
      j++;
    }
  }
  return i - j;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
console.log(
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
);
