import { args } from '../arguments'
import { OPERATION } from '../enums'

it('checks arguments for simple input', () => {
  const givenArgs = args('add 4,3,2')

  expect(givenArgs.operation).toEqual(OPERATION.ADD)
  expect(givenArgs.numbers).toEqual([4, 3, 2])
})

it('checks arguments for input w/ multiple delimiters', () => {
  const givenArgs = args('subtract //[#][^]\\n4#3^2')

  expect(givenArgs.operation).toEqual(OPERATION.SUBTRACT)
  expect(givenArgs.numbers).toEqual([4, 3, 2])
})

it('checks arguments for input w/ option delimiter', () => {
  const givenArgs = args('multiply 4^3^2 -delim:^')

  expect(givenArgs.operation).toEqual(OPERATION.MULTIPLY)
  expect(givenArgs.numbers).toEqual([4, 3, 2])
  expect(givenArgs.options.delimiter).toEqual('^')
})

it('checks arguments for input w/ option maxint', () => {
  const givenArgs = args('divide 4,11,2 -maxint:10')

  expect(givenArgs.operation).toEqual(OPERATION.DIVIDE)
  expect(givenArgs.numbers).toEqual([4, 2])
  expect(givenArgs.options.maxInt).toEqual(10)
})

it('checks arguments for input w/ option noNegNums', () => {
  const givenArgs = args('add 4,3,2 -noneg')

  expect(givenArgs.operation).toEqual(OPERATION.ADD)
  expect(givenArgs.numbers).toEqual([4, 3, 2])
  expect(givenArgs.options.noNegNums).toEqual(true)
})

it('checks arguments throws for input w/ option noNegNums', () => {
  const checkThrow = () => args('subtract 4,-3,2 -noneg')
  expect(checkThrow).toThrowError(/Negative/)
})
