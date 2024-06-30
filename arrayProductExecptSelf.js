const product = (nums) => {
  let n = nums.length;
  let answer = new Array(n).fill(1);

  let leftA = 1;
  console.log(nums);
  console.log(answer);

  for (let i = 0; i < n; i++) {
    answer[i] = leftA;
    leftA = leftA * nums[i];
  }
  //   console.log(leftA);
  console.log(answer);

  let rightA = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] = answer[i] * rightA;
    rightA = rightA * nums[i];
  }
  //   console.log(rightA);
  return answer;
};

console.log(product([2, 4, 4, 1, 6]));
// console.log(product([1, 2, 3, 4]));
