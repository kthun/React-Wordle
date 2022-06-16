import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyUp, guesses, isCorrect, turn, usedKeys } = useWordle(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [handleKeyUp])

  return (
    <div>
      <div>Solution: {solution}</div>
      <div>Current guess: {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys}/>
    </div>
  )
}
