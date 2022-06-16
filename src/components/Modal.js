import React from 'react'

export default function Modal({ isCorrect, turn, solution }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You win!</h1>
          <p className='solution'>{solution}</p>
          <p>You found the solution in {turn} turns.</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>You lose!</h1>
          <p className='solution'>{solution}</p>
          <p>You could not find the solution in {turn} turns.</p>
        </div>
      )}
    </div>
  )
}
