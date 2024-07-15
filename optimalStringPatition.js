var partitionString = function (s) {
  let count = 1;
  let arr = [];
  let str = "";
  str += s[0];
  for (let i = 1; i < s.length; i++) {
    if (!str.includes(s[i])) {
      str += s[i];
    } else {
      count++;
      arr.push(str);
      str = s[i];
      if (!arr.includes(str)) arr.push(str);
    }
  }
  console.log(arr, arr.length);
};

console.log(partitionString("abacaba"));
