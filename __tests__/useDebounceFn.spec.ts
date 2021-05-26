import { useDebounceFn } from '@packages'

type noop = (...args: any[]) => any

describe('test useDebounceFn', () => {
  const nextTask = (fn: noop) => setTimeout(fn)

  test('two plus two is four', () => {
    expect(2 + 2).toBe(4)
  })
})
