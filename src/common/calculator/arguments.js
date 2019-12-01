/*eslint no-throw-literal: 0*/
import { parseOperation, parseNumbers } from '../calculator/parsers'

export const args = command => {
  const givenArgs = command.split(' ')

  if (givenArgs.length < 2) throw 'Incorrect input format.'

  let option = givenArgs.find(arg => arg.startsWith('-delim'))
  const delimiter = option ? option.split(':')[1] : ''
  option = givenArgs.find(arg => arg.startsWith('-maxint'))
  const maxInt = option ? +option.split(':')[1] : -1
  const noNegNums = !!givenArgs.find(arg => arg.startsWith('-noneg'))

  const options = {
    noNegNums,
    maxInt,
    delimiter
  }

  const operation = parseOperation(givenArgs[0])
  const numbers = parseNumbers(givenArgs[1], options)

  return {
    operation,
    numbers,
    options
  }
}
