import { parseOperation } from '../operation-parser'
import { OPERATION } from '../../enums'

it('checks operation for `add`', () => {
  const operation = parseOperation('add')

  expect(operation).toEqual(OPERATION.ADD)
})

it('checks operation for `subtract`', () => {
  const operation = parseOperation('subtract')

  expect(operation).toEqual(OPERATION.SUBTRACT)
})

it('checks operation for `multiply`', () => {
  const operation = parseOperation('multiply')

  expect(operation).toEqual(OPERATION.MULTIPLY)
})

it('checks operation for `divide`', () => {
  const operation = parseOperation('divide')

  expect(operation).toEqual(OPERATION.DIVIDE)
})
