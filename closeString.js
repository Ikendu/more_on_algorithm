// Didnt pass all test (i46/164)
const closeString = (word1, word2) => {
  if (word1.length !== word2.length) return false;
  for (let i of word1) {
    if (!word2.includes(i)) return false;
  }
  return true;
};

console.log(closeString("cabbba", "abbccc"));

const closeString2 = (word1, word2) => {
  let freq1 = Array(26).fill(0);
  let freq2 = Array(26).fill(0);

  for (let i in word1) {
    freq1[word1[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    freq2[word2[i].charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  for (let i in freq1) {
    if (
      (freq1[i] === 0 && freq2[i] !== 0) ||
      (freq1[i] !== 0 && freq2[i] === 0)
    ) {
      return false;
    }
  }
  freq1 = freq1.sort((a, b) => a - b);
  freq2 = freq2.sort((a, b) => a - b);

  for (let i in freq1) {
    if (freq1[i] !== freq2[i]) return false;
  }
  console.log(word1[0].charCodeAt(0), "a".charCodeAt(0), word2);
  console.log(freq1, freq2);
  return true;
};
console.log(closeString2("cabbba", "abbccc"));
