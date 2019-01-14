const rps = require('./RockPaperScissors')

test('expect rock to beat scissors', () => {
  expect(rps('rock', 'scissors')).toBe('Rock wins')
})
