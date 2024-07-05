const uniqueCount = (nums) => {
  let count = 0;
  nums = nums.sort((a, b) => a - b);
  let counts = [];

  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      count++;
      counts.push(count);
      count = 0;
    } else {
      count++;
    }
  }
  return counts.length === [...new Set(counts)].length;
};

console.log(uniqueCount([1, 2, 2, 1, 1, 3]));
console.log(uniqueCount([1, 2]));
console.log(uniqueCount([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
