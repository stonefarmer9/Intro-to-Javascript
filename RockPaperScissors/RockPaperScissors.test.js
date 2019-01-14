const rps = require('./RockPaperScissors')

test('expect rock to beat scissors', () => {
  expect(rps('rock', 'scissors')).toBe('Rock wins')
})

test('expect scissors to beat paper', () => {
  expect(rps('scissors', 'paper')).toBe('Scissors wins')
})
