import { args } from './arguments'
import { OPERATION } from './enums'

export const calculate = command => {
  //#region - Operations
  const add = numbers => {
    return numbers.reduce((accum, currval) => accum + currval)
  }

  const subtract = numbers => {
    return numbers.reduce((accum, currval) => accum - currval)
  }

  const multiply = numbers => {
    return numbers.reduce((accum, currval) => accum * currval)
  }

  const divide = numbers => {
    return numbers.reduce((accum, currval) => accum / currval)
  }
  //#endregion - Operations

  try {
    const givenArgs = args(command)
    let equation = ''

    switch (givenArgs.operation) {
      case OPERATION.ADD: {
        equation = `${givenArgs.numbers.join('+')} = ${add(givenArgs.numbers)}`
        break
      }

      case OPERATION.SUBTRACT: {
        equation = `${givenArgs.numbers.join('-')} = ${subtract(
          givenArgs.numbers
        )}`
        break
      }

      case OPERATION.MULTIPLY: {
        equation = `${givenArgs.numbers.join('*')} = ${multiply(
          givenArgs.numbers
        )}`
        break
      }

      case OPERATION.DIVIDE: {
        equation = `${givenArgs.numbers.join('/')} = ${divide(
          givenArgs.numbers
        )}`
        break
      }

      default:
        break
    }

    return {
      success: true,
      equation
    }
  } catch (error) {
    return {
      success: false,
      error
    }
  }
}
