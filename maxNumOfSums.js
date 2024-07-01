const maxNumOfSum = (nums, k) => {
  nums = nums.sort((a, b) => a - b);
  console.log(nums);

  let i = 0;
  let j = nums.length - 1;
  let count = 0;

  while (i < j) {
    // console.log(nums[i], nums[j]);
    let sum = nums[i] + nums[j];
    if (sum === k) {
      count++;
      j--;
      i++;
    } else if (sum > k) {
      j--;
    } else {
      i++;
    }
  }
  return count;
};

console.log(maxNumOfSum([1, 3, 4, 5, 6, 2, 2], 5));

//using map solution

const maxNumMap = (nums, k) => {
  let map = {};
  let count = 0;

  for (let num of nums) {
    let sum = k - num;
    if (map[sum]) {
      count++;
    //   map[sum]--;
    } else {
      if (map[num]) map[num]++;
      else map[num] = 1;
    }
  }
  console.log(map);
  return count;
};
console.log(maxNumMap([1, 3, 4, 5, 6, 2, 2], 5));
