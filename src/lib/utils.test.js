import { partial, pipe } from './utils'

const add = (a, b) => a + b
const multipleAdd = (a, b, c) => a + b + c
const increment = (number) => number + 1
const double = (number) => number * 2

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

test('pipe passes the results of increment to double', () => {
    const pipeline = pipe(increment, double);
    const result = pipeline(2)
    expect(result).toBe(6)
})

test('pipe passes the results of double to increment', () => {
    const pipeline = pipe(double, increment)
    const result = pipeline(2)
    expect(result).toBe(5)
})

test('pipe works with more than 2 functions', () => {
    const pipeline = pipe(add, increment, double, increment)
    const result = pipeline(1,2)
    expect(result).toBe(9)
})