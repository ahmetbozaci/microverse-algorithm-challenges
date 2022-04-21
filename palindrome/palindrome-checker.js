const palindrome = (str) => {
  updateStr = str.toLowerCase().replace(/ /g, '').replace(/[^a-z0-9]/g, '');
  reverseStr = updateStr.split("").reverse().join('');
  let result;
  updateStr === reverseStr ? result = true : result = false;
  return result;
};


module.exports = palindrome;
