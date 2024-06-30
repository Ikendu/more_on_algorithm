var compress = function (chars) {
  let newArr = [];

  for (let i = 0; i < chars.length; i++) {
    let char = chars[i];
    // console.log(char);
    let count = 1;
    let j = i;
    while (chars[j + 1] === char) {
      count++;
      j++;
      i++;
    }
    newArr.push(char);
    if (count > 1) newArr.push(count.toString());
  }
  return newArr;
};
console.log(compress(["a", "a", "b", "b", "c", "c", "c", "d"]));

//better answer but with Leetcode missups
var compress1 = function (chars) {
  let count = 1;
  let str = "";

  for (let i = 1; i < chars.length; i++) {
    let prevChar = chars[i - 1];
    if (chars[i] !== prevChar) {
      str += prevChar;
      if (count > 1) str += count;
      count = 1;
    } else {
      count++;
    }
  }
  str += chars[chars.length - 1];
  if (count > 1) str += count;

  for (let i = 0; i < str.length; i++) {
    chars[i] = str[i];
  }
//   chars.length = str.length;
  return chars;
};

console.log(compress1(["a", "a", "b", "b", "c", "c", "c", "d"]));
