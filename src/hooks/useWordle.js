import { useState } from 'react'

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([...Array(6)])   // Stores all guesses as arrays of letters with formatting
  const [history, setHistory] = useState([])              // Stores all guesses as strings
  const [isCorrect, setIsCorrect] = useState(false)

  const formatGuess = () => {
    let solutionArray = [...solution]
    let formattedGuess = [...currentGuess].map((letter) => {
      return { letter: letter, color: 'grey' }
    })

    formattedGuess.forEach((formattedLetter, i) => {
      if (solutionArray[i] === formattedLetter.letter) {
        formattedLetter.color = 'green'
        solutionArray[i] = null
      } else if (solutionArray.includes(formattedLetter.letter) && formattedLetter.color !== 'green') {
        formattedLetter.color = 'yellow'
        solutionArray[solutionArray.indexOf(formattedLetter.letter)] = null

      }
    })

    return formattedGuess
  }

  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true)
    }
    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses]
      newGuesses[turn] = formattedGuess
      return newGuesses
    })
    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess]
    })
    setTurn((prevTurn) => {
      return prevTurn + 1
    })
    setCurrentGuess('')
  }

  const handleKeyUp = ({ key }) => {
    if (key === "Enter") {
      if (turn > 5) {
        console.log('No more guesses')
        return
      }
      if (history.includes(currentGuess)) {
        console.log('Already tried this word')
        return
      }
      if (currentGuess.length !== 5) {
        console.log('Word must be 5 letters long')
        return
      }
      const formattedGuess = formatGuess()
      addNewGuess(formattedGuess)
    }

    if (key === "Backspace") {
      if (currentGuess.length > 0) {
        setCurrentGuess((prev) => {
          return prev.slice(0, -1)
        })
        return
      }
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key
        })
      }
    }
  }

  return { turn, currentGuess, guesses, isCorrect, handleKeyUp }
}

export default useWordle
