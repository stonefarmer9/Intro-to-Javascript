const fizzbuzz = require('./fizzbuzz')

test('Returns fizz for 3', () => {
  expect(fizzbuzz(3)).toMatch('FIZZ!')
})

test('Returns buzz for 5', () => {
    expect(fizzbuzz(5)).toBe('BUZZ!')
})

test('Returns FIZZBUZZ for 15', () => {
  expect(fizzbuzz(15)).toBe('FIZZBUZZ!')
})

test('Returns 14 for 14', () => {
  expect(fizzbuzz(14)).toBe(14)
})
