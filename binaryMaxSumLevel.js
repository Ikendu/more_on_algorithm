function maxSumLevel(root) {
  let queue = [];
  let max;
  let level = 1;
  let result;
  queue.push(root);
  while (queue.length > 0) {
    let length = queue.length;
    let sum = 0;
    for (let i = 0; i < length; i++) {
      let temp = queue[0];
      sum += temp.value;
      if (temp.left) queue.push(temp.left);
      if (temp.right) queue.push(temp.right);
      queue.shift();
    }
    if (sum > max) {
      max = sum;
      result = level;
    }
    level++;
  }
  return result;
}
