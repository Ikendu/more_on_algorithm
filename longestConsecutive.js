//Efficient but not fats enough
const longestConsecutive = (nums) => {
  let longest = 0;
  let numSet = new Set(nums);

  for (let n of nums) {
    let length = 1;
    if (!numSet.has(n - 1)) {
      while (numSet.has(n + length)) {
        length++;
      }
    }
    longest = Math.max(longest, length);
  }
  return longest;
};

console.log(longestConsecutive([100, 4, 300, 1, 2, 3, 5]));

//Efficient and fast
const longestConsecutive2 = (nums) => {
  let length = nums.length;
  if (length == 0) return 0;
};
