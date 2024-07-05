// Return the difference of two arrays in this way:
// Return two arrays each containing unique numbers of each arrays

// good but Not Efficent enough
const arrayDiffs = (nums1, nums2) => {
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < nums1.length; i++) {
    if (!nums2.includes(nums1[i]) && !arr1.includes(nums1[i])) {
      arr1.push(nums1[i]);
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (!nums1.includes(nums2[i]) && !arr2.includes(nums2[i])) {
      arr2.push(nums2[i]);
    }
  }
  return [arr1, arr2];
};

// Better algorithm
const arrayDiffs1 = (nums1, nums2) => {
  let setA = new Set(nums1);
  let setB = new Set(nums2);

  let arr1 = [...setA].filter((a) => !setB.has(a));
  let arr2 = [...setB].filter((b) => !setA.has(b));

  return [arr1, arr2];
};
console.log(arrayDiffs1([1, 2, 3], [2, 4, 6]));
console.log(arrayDiffs1([1, 2, 3, 3], [1, 1, 2, 2]));

const arrayDiffs2 = (nums1, nums2) => {
  let setA = new Set(nums1);
  let setB = new Set(nums2);

  for (let num of setA) {
    if (setB.has(num)) {
      setA.delete(num);
      setB.delete(num);
    }
  }
  return [[...setA], [...setB]];
};
console.log(arrayDiffs2([1, 2, 3], [2, 4, 6]));
console.log(arrayDiffs2([1, 2, 3, 3], [1, 1, 2, 2]));
