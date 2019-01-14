function rps (a, b) {
  if (a === 'rock' && b === 'scissors') {
    return "Rock wins"
  } else if ( a === 'paper' &&  b === 'rock') {
      return 'Paper wins'
    } else {
    return "Scissors wins"
  }
}
module.exports = rps
