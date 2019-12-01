/*eslint no-throw-literal: 0*/
import { OPERATION } from '../enums'

export const parseOperation = operationToParse => {
  const operation = OPERATION[operationToParse.toUpperCase()]

  if (!operation) throw 'Incorrect operation type.'

  return operation
}
