//the the longest ones after flipping k number of zeros
//actually we are returning the longest ones with k number of zeros in front,
// at the back or both side of the group of ones
const longestOneAfterFlip = (nums, k) => {
  let sum = 0;
  let zeros = 0;
  let start = 0;

  for (let ones = 0; ones < nums.length; ones++) {
    if (nums[ones] === 0) zeros++; //count consecutive zeros while the for-loop is counting ones

    // we are counting only zeros = k
    if (zeros > k) {
      while (zeros > k) {
        if (nums[start] === 0) zeros--; // if there is a tailing zero reduce the first one
        start++; //start sliding through the array
      }
    }
    sum = Math.max(sum, ones - start + 1); // return total count - beginning of window (+1)
  }
  return sum;
};

console.log(longestOneAfterFlip([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));

// REDO for better understanding
const longestOne = (nums, k) => {
  let zeros = 0;
  let back = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) zeros++;

    if (front > k) {
      if (nums[back] === 0) front--;
      back++;
    }
    max = Math.max(max, i - back);
  }
};

console.log(longestOne([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
