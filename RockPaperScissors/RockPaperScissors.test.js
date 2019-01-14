const rps = require('./RockPaperScissors')

test('expect rock to beat scissors', () => {
  expect(rps('rock', 'scissors')).toBe('Rock wins')
})

test('expect scissors to beat paper', () => {
  expect(rps('scissors', 'paper')).toBe('Scissors wins')
})

test('expect paper to beat rock', () => {
  expect(rps('paper', 'rock')).toBe('Paper wins')
})

test('expect rock to loose to paper', () => {
  expect(rps('rock', 'paper')).toBe('Paper wins')
})

test('expect paper to loose to scissors', () => {
  expect(rps('paper', 'scissors')).toBe('Scissors wins')
})
