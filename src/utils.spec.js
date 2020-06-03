import { calculateWinner } from './utils'
describe('calculateWinner', () => {
  const _ = undefined
  const x = 'X'
  const o = 'O'
  it('calls no winner for empty board', () => {
    expect(calculateWinner(
      [
        _, _, _,
        _, _, _,
        _, _, _,
      ]
    )).to.equal(null)
  })

  it('calls winner for X', () => {
    expect(calculateWinner(
      [
        _, _, x,
        x, o, x,
        _, o, x,
      ]
    )).to.equal(x)
  })

  it('calls winner for O', () => {
    expect(calculateWinner(
      [
        _, _, o,
        x, o, x,
        o, o, x,
      ]
    )).to.equal(o)
  })
})
