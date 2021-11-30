function hashTable(arr) {
  const newArray = [];

  arr.forEach((element) => {
    let mod = element % 11;
    if(newArray[mod] === undefined) {
    newArray.splice(mod,0,element)} 
    else {
      newArray.splice(mod+1,0, element)
    }
  });

  // const newAr = newArray.filter((element) => {
  //  return element !== undefined
  // })

  return newArray;
}

console.log(hashTable([12, 24, 125, 5, 91, 1106, 2, 1021, 29, 3536, 10]));
// => [12, 24, 2, 91, 125, 5, 3536, 1106, 29, 1021, 10]

console.log(hashTable([2, 341, 73, 8265, 234004, 602, 7400000, 200000000]));
// => [341, 234004, 2, 200000000, 7400000, 8265, 73, 602]

module.exports = hashTable;
