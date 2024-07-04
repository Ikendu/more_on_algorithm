const heightestPoint = (nums) => {
  let max = 0;
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    max = max + nums[i];
    ans = Math.max(ans, max);
    // newSum = 0;
    console.log(max);
  }
  return ans;
};

console.log(heightestPoint([-5, 1, 5, 0, -7]));
