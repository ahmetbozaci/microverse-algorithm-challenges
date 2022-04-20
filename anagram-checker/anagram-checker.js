/** @format */

const anagram = (str1, str2) => {
  updateStr1 = str1
    .toLowerCase()
    .replace(/ /g, '')
    .replace(/[^\s\dA-Z]/gi, '');
  updateStr2 = str2
    .toLowerCase()
    .replace(/ /g, '')
    .replace(/[^\s\dA-Z]/gi, '');

  let checkNum = 0;
  let letterSize = 0;

  if (updateStr1.length === updateStr2.length) {
    letterSize = updateStr1.length;
  } else {
    return false;
  }

  for (let i = 0; i < letterSize; i += 1) {
    if (updateStr1.includes(updateStr2[i])) {
      checkNum++;
    }
  }

  if (checkNum === letterSize) {
    return true;
  }
};

module.exports = anagram;
