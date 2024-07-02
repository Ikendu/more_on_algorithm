//return the maximum number of consecutive vowels less than or equals the k in the string
//Greedy Algorithm

const maxVowel = (str, k) => {
  let newStr = "";
  let vowel = "aeiou";
  let count = 0;
  let num = 0;
  //   let left = 0;
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
      //   left++;
    }
  }
  return num;
};
console.log(maxVowel("abciiideeeeef", 3));

//Uptimum solution
const maxNumOfStr = (str, k) => {
  let vowels = "aeiou";
  let count = 0;
  let num = 0;
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
    if (i - start + 1 > k) {
      if (vowels.includes(str[start])) {
        count--;
      }
      start++;
    }
    num = Math.max(num, count);
    if (num === k) {
      return num;
    }
  }
  return num;
};
console.log(maxNumOfStr("abciiideeeeef", 3));

//More Efficent solution
const maxNmOfVowel = (str, k) => {
  let vowels = "aeiou";
  let count = 0;
  let num = 0;
  let start = 0;

  for (let i = 0; i < k; i++) {
    if (vowels.includes(str[i])) count++;
    if (count === k) return count + "count"; // early return 
  }
  for (let i = k; i < str.length; i++) {
    if (vowels.includes(str[i - k])) count--;
    if (vowels.includes(str[i])) count++;
    num = Math.max(num, count);
    
    if (num === k) return num; // early return
  }
  return num + " num";
};

console.log(maxNmOfVowel("abciiideeeeef", 3));
