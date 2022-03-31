const arr =  []
const fizzbuzz = () => {
  for(let i = 1; i <= 100; i += 1) {
    if(i % 15 === 0){
      arr.push("FizzBuzz")
    } else if (i % 5 === 0) {
      arr.push("Buzz")
    }
    else if (i % 3 === 0) {
      arr.push("Fizz")
    }
    else {
      arr.push(i)
    }
  }
  return arr
}

module.exports = fizzbuzz