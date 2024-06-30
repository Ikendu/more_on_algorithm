const increasingTripletSubsequence = (nums) => {
  // return true if three consecutive numbers are in increasing order
  // and false if no three are such
  let first = Infinity;
  let second = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= first) first = nums[i];
    if (nums[i] > first && nums[i] < second) second = nums[i];
    if (nums[i] > first && nums[i] > second) return true;
  }
  return false;
};
console.log(increasingTripletSubsequence([1, 2, 3, 4, 5, 6]));
console.log(increasingTripletSubsequence([6, 4, 3, 4, 1, 6]));
