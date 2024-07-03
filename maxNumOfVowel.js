const maxVowel = (str, k) => {
  let newStr = "";
  let vowel = "aeiou";
  let count = 0;
  let num = 0;
  let j = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
      newStr += str[i];
    }
    j++;

    if (j === k) {
      count = newStr.length;
      num = Math.max(num, count);
      count = 0;
      j = 0;
      newStr = "";
    }
  }
  return num;
};

console.log(maxVowel("abciiideeeeef", 3));
