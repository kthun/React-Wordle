import React from 'react'

export default function Row({ guess }) {
  if (guess) {
    console.log(guess)
    return (
      <div className="row">
        {guess.map((l, i) => (
          <div key={i} className={l.color}>{l.letter}</div>
        ))}
      </div>
    )
  }


  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
