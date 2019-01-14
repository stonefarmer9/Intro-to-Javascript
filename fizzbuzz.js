
function fizzbuzz (number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'FIZZBUZZ!'
  } else if (number % 3 === 0) {
    return 'FIZZ!'
  } else if (number % 5 === 0) {
    return 'BUZZ!'
  } else {
    return number
  }
}

fizzbuzz(3) // FIZZ
fizzbuzz(5) // BUZZ
fizzbuzz(15) // FIZZBUZZ
fizzbuzz(17) // 17
fizzbuzz(11) // 11
fizzbuzz(10) // BUZZ
fizzbuzz(75) // FIZZBUZZ
module.exports = fizzbuzz
