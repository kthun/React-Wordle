import { useState } from 'react'

const useWordle = (solution) => {

    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([])
    const [history, setHistory] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)

    const formatGuess = () => {
        console.log('Received and formatting guess: ', currentGuess)
        let solutionArray = [...solution]
        let formattedGuess = [...currentGuess].map((letter) => {
            return {letter: letter, color: 'grey'}
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

    const addNewGuess = () => {

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
            console.log(formattedGuess)
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

    return {turn, currentGuess, guesses, isCorrect, handleKeyUp}
}

export default useWordle