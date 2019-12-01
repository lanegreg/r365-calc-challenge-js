import { parseNumbers } from '../numbers-parser'

it('checks numbers w/ 2 custom delimiters', () => {
  const numbers = parseNumbers('//[@@][#$#]\\n3@@6#$#65', { delimiter: '' })

  expect(numbers).toEqual(expect.arrayContaining([3, 6, 65]))
})

it('checks numbers w/ option delimiter', () => {
  const numbers = parseNumbers('3^6^65', { delimiter: '^' })

  expect(numbers).toEqual(expect.arrayContaining([3, 6, 65]))
})
