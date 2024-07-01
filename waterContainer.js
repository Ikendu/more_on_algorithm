const waterContainer = (heights) => {
  let i = 0;
  let j = heights.length - 1;
  let curr_area = 0;
  let new_area = 0;

  while (i < j) {
    let min = Math.min(heights[i], heights[j]);
    curr_area = min * (j - i);
    new_area = Math.max(new_area, curr_area);
    console.log(curr_area, new_area);

    if (heights[i] >= heights[j]) {
      j--;
    } else {
      i++;
    }
  }
  return new_area;
};

console.log(waterContainer([10, 7, 8, 6, 2, 5, 4, 8, 3, 7]));
