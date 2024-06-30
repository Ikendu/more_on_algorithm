const subsequence = (s, t) => {
  if (s.length > t.length) return false;
  if (s.length < 1) return true;
  //using two pointers
  let i = 0;
  let j = 0;

  while (j < t.length) {
    if (s[i] === t[j]) {
      i++;
      j++;
    } else {
      j++;
    }
    if (i == s.length) return true;
  }
  return false;
};

console.log(subsequence("abc", "bgbahcg"));
