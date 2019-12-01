/*eslint no-throw-literal: 0*/
import { InputFormat } from '../common'
import { parseDelimiters } from '../parsers'

//#region - Private Funcs
const splitByDelims = (stringToSplit, delims) => {
  let arrToReduce = delims
  arrToReduce.push([stringToSplit])

  return arrToReduce.reduceRight((accum, currval) => {
    let arr1 = []

    accum.forEach(arr2 => {
      arr1 = [...arr1, ...arr2.split(currval)]
    })

    return arr1
  })
}

const checkForNegativeNumbers = numbers => {
  numbers.map(item => {
    if (item < 0) throw 'Negative number was found.'

    return item
  })
}
//#endregion - Private Funcs

export const parseNumbers = (inputFormatToParse, options) => {
  const inputFormat = InputFormat(inputFormatToParse)
  const delimiters = options.delimiter
    ? [options.delimiter]
    : parseDelimiters(inputFormat)

  var numbers = splitByDelims(inputFormat.getNumbersToParse(), delimiters).map(
    item => +item
  )

  numbers =
    options.maxInt > 0
      ? numbers.filter(item => item <= options.maxInt)
      : numbers

  if (options.noNegNums) checkForNegativeNumbers(numbers)

  return numbers
}
