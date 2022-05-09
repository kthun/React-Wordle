import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'

export default function Wordle({ solution }) {
    const { currentGuess, handleKeyUp } = useWordle(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp)

        return () => window.removeEventListener('keyup', handleKeyUp)
    }, [handleKeyUp])

    return (
        <div>
            <div>Solution: {solution}</div>
            <div>Current guess: {currentGuess}</div>
        </div>
    )
}
