// Exceeded time limit: Not Efficient
const removeStars = (str) => {
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "*") {
      str.splice(i - 1, 2);
      i -= 2;
    }
  }
  return str.join("");
};

console.log(removeStars("leet**cod*e"));

//Better and within time-range: Efficient
const removeStars1 = (str) => {
  str = str.split("");
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "*") {
      arr.pop();
    } else {
      arr.push(str[i]);
    }
  }
  return arr.join("");
};
console.log(removeStars1("leet**cod*e"));
