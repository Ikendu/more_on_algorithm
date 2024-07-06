const collision = (asteroids) => {
  let stack = [];

  for (let val of asteroids) {
    if (stack.length == 0 || val > 0) {
      stack.push(val);
    } else {
      while (true) {
        let peek = stack[stack.length - 1];
        if (peek < 0) {
          stack.push(val);
          break;
        } else if (peek === -val) {
          stack.pop();
          break;
        } else if (peek > -val) {
          break;
        } else {
          stack.pop();
          if (stack.length <= 0) {
            stack.push(val);
            break;
          }
        }
      }
    }
  }
  return stack;
};
console.log(collision([5, 10, -5]));
console.log(collision([8, -8]));
