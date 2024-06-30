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
