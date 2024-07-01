//GREEN and less BRUTE FORCE SOLUTION
const averageSunArray = (nums, k) => {
  //initialise a new array
  let vars = Array(k);
  //initialise k different variables and store them in the new array
  for (let i = 0; i < k; i++) {
    vars[i] = i;
  }
  // initialise the last varaible
  let last = vars.length - 1;

  let sum = 0;
  let curr = 0;

  while (vars[last] <= nums.length - 1) {
    for (let i = 0; i < k; i++) {
      sum += nums[vars[i]];
    }

    if (sum > curr) curr = sum;
    sum = 0;

    for (let i = 0; i < k; i++) {
      vars[i]++;
    }
  }
  console.log(vars, curr);
  return curr / k;
};

// console.log(averageSunArray([1, 12, -5, -6, 50, 3], 4));
// console.log(averageSunArray([5], 1));

//Dynamic and efficent solution
const averageSubArray = (nums, k) => {
  let last = 0;
  let curr = 0;
  let sum = 0;
  let first = 0;

  while (first < nums.length) {
    sum += nums[first];

    //Sliding through an aray
    if (first - last + 1 === k) {
      curr = Math.max(curr, sum);
      console.log(curr);
      sum = sum - nums[last];
      last++;
    }
    first++;
  }
  return curr / k;
};
console.log(averageSubArray([1, 12, -5, -6, 50, 3], 4));
// console.log(averageSubArray([5], 1));
