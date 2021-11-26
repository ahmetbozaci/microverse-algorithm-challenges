sum = number => {
  if(number>=0){
    return number + sum(number -1)
  }
  return 0
}
module.exports = sum
console.log(sum(4))
console.log(sum(10))
