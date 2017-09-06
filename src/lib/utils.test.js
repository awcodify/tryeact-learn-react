import { partial } from './utils'

const add = (a, b) => a + b

const multipleAdd = (a, b, c) => a + b + c

test('partial applied the first argument ahead of time', () => {
  const inc = partial(add, 1)
  const result = inc(2)
  expect(result).toBe(3)
})

test('partial applies the multiple arguments ahead of time', () => {
  const inc = partial(multipleAdd, 1, 3)
  const result = inc(2)
  expect(result).toBe(6)
})
