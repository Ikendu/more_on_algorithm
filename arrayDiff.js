// Return the difference of two arrays in this way:
// Return two arrays each containing unique numbers of each arrays

const arrayDiffs = (nums1, nums2) => {
  let length = nums1.length > nums2.length ? nums1.length : nums2.length;
  console.log(length);
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < length; i++) {
    if (!nums2.includes(nums1[i]) && !arr1.includes(nums1[i])) {
      arr1.push(nums1[i]);
    }
    if (!nums1.includes(nums2[i]) && !arr2.includes(nums2[i])) {
      arr2.push(nums2[i]);
    }
  }
  return [arr1, arr2];
};

console.log(arrayDiffs([1, 2, 3], [2, 4, 6]));
console.log(arrayDiffs([1, 2, 3, 3], [1, 1, 2, 2]));
