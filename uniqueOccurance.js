const uniqueCount = (nums) => {
  let count = 0;
  nums = nums.sort((a, b) => a - b);
  let counts = [];

  //   console.log(nums);
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

// Using hashMap for better efficiency
const uniqueCount1 = (nums) => {
  let hashMap = new Map();
  let numSet = new Set();

  for (let i of nums) {
    if (hashMap.has(i)) {
      let count = hashMap.get(i);
      hashMap.set(i, count + 1);
    } else {
      hashMap.set(i, 1);
    }
  }
  for (let count of hashMap.values()) {
    if (numSet.has(count)) {
      return false;
    } else {
      numSet.add(count);
    }
  }
  return true;
};
console.log("--------------------------");
console.log(uniqueCount1([1, 2, 2, 1, 1, 3]));
console.log(uniqueCount1([1, 2]));
console.log(uniqueCount1([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
