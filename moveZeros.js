const moveZeros = (nums) => {
  if (nums.length == 1) return nums;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums[nums.length] = nums[i];
      nums.splice(i, 1);
    } else if (nums[i - 1] == 0) {
      nums[nums.length] = nums[i - 1];
      nums.splice(i - 1, 1);
    }
  }
  return nums;
};
console.log(moveZeros([0, 0, 0, 0, 0, 1, 0, 4, 0, 11, 41]));
// console.log(moveZeros([0, 0, 1]));

//using two pointers
const endZeros = (nums) => {
  let zeros = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      //look for non-zeros and swap it all the zeros
      [nums[zeros], nums[i]] = [nums[i], nums[zeros]];
      zeros++;
      console.log(nums);
    }
  }
  return nums;
};

console.log(endZeros([0, 0, 0, 0, 0, 0, 0, 1, 0, 4, 0, 11, 41]));
