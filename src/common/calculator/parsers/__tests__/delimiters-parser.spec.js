import { parseDelimiters } from '../delimiters-parser'
import { InputFormat } from '..//../common'

it('checks delimiters w/ 2 custom delimiters', () => {
  const delimiters = parseDelimiters(InputFormat('//[@@][#$#]\\n45@@5#$#8'))

  expect(delimiters).toEqual(expect.arrayContaining(['@@', '#$#']))
})

it('checks delimiters w/ non-custom default delimiters', () => {
  const delimiters = parseDelimiters(InputFormat('45,5\\n8'))

  expect(delimiters).toEqual(expect.arrayContaining([',', '\\n']))
})
