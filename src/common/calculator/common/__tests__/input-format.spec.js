import { InputFormat } from '../input-format'

it('checks input w/ 2 custom delimiters', () => {
  const inputFormat = InputFormat('//[@@][#$#]\\n56@@7#$#12')

  expect(inputFormat.isCustom).toEqual(true)
  expect(inputFormat.getNumbersToParse()).toEqual('56@@7#$#12')
  expect(inputFormat.getDelimitersToParse()).toEqual('[@@][#$#]')
})

it('checks input using default delimiters', () => {
  const inputFormat = InputFormat('56@@7#$#12')

  expect(inputFormat.isCustom).toEqual(false)
  expect(inputFormat.getNumbersToParse()).toEqual('56@@7#$#12')
  expect(inputFormat.getDelimitersToParse()).toEqual('')
})
