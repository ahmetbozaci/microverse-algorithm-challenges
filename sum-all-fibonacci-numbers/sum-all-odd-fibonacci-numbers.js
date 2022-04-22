const sumFibs = (num) => {
  let arr = [1,1];
  let total = 0;
  for(let i = 2; i<=num; i += 1){
    arr[i]= arr[i-2] + arr[i-1]
  }

  const newArr = arr.filter((item) => item<=num);

  for(let i= 0; i<newArr.length; i += 1){
    if(newArr[i] % 2 !== 0){
      total += newArr[i]
    } 
  }
  return total;
}
module.exports = sumFibs
