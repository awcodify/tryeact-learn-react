export const partial = (fn, ...args) => fn.bind(null, ...args)
const _pipe = (fn, fn1) => (...args) => fn1(fn(...args)) 
export const pipe = (...fns) => fns.reduce(_pipe);