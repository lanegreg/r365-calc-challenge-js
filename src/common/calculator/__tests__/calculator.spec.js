import { calculate } from '../calculator'

it('checks calculator w/ simple input for `add`', () => {
  const results = calculate('add 4,3,2')

  expect(results.success).toEqual(true)
  expect(results.equation).toEqual('4+3+2 = 9')
})

it('checks calculator w/ simple input for `subtract`', () => {
  const results = calculate('subtract 6,3,2')

  expect(results.success).toEqual(true)
  expect(results.equation).toEqual('6-3-2 = 1')
})

it('checks calculator w/ simple input for `multiply`', () => {
  const results = calculate('multiply 4,3,2')

  expect(results.success).toEqual(true)
  expect(results.equation).toEqual('4*3*2 = 24')
})

it('checks calculator w/ simple input for `divide`', () => {
  const results = calculate('divide 12,4,3')

  expect(results.success).toEqual(true)
  expect(results.equation).toEqual('12/4/3 = 1')
})

it('checks calculator for throw w/ complex input for `add` and -noneg', () => {
  const results = calculate('add //[%]\\n2%4%-3 -noneg')

  expect(results.success).toEqual(false)
  expect(results.error).toEqual('Negative number was found.')
})
