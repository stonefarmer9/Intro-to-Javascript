function rps (a, b) {
  if (a === 'rock' && b === 'scissors') {
    return "Rock wins"
  } else if ( a === 'paper' &&  b === 'rock') {
    return 'Paper wins'
  } else  if (a === 'scissors' && b === 'paper') {
    return "Scissors wins"
  } else if (a === 'rock' && b === 'paper') {
    return "Paper wins"
  }
}
module.exports = rps
