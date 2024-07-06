const decodeString = (str) => {
  let stack = [];
  let curStr = ``;
  let curNum = 0;

  for (let i of str) {
    if (i === `[`) {
      stack.push(curStr);
      stack.push(curNum);
      curStr = ``;
      curNum = 0;
    } else if (i === `]`) {
      let prevNum = stack.pop();
      let prevStr = stack.pop();
      curStr = prevStr + curStr.repeat(prevNum);
    } else if (i >= `0` && i <= `9`) {
      curNum = curNum * 10 + Number(i);
    } else {
      curStr += i;
    }
  }
  return curStr;
};

console.log(decodeString("3[a2[c]]"));
console.log(decodeString("3[a]2[bc]"));
