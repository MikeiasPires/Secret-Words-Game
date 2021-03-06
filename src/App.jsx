import react, { useState, useSyncExternalStore } from 'react'
import { createGlobalStyle } from 'styled-components'
import GlobalStyle from './GlobalStyle'
import ScreenGame from './page/ScreenGame/ScreenGame'
import { wordslist } from './data/words'
import GameStart from './page/Game/GameStart'
import EndGame from './page/GameOver/EndGame'


const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 1, name: "end" },
];

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordslist);
  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letter, setLetter] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongletters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const pickedWordAndCategory = () => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    const word = words[category][[Math.floor(Math.random() * words[category].length)]]
    console.log(category)
    console.log(word)

    return { word, category }

  }







  const startGame = () => {

    const { word, category } = pickedWordAndCategory();

    let wordsLetter = word.split("")
    setPickedWord(words)
    setPickedCategory(category)
    setLetter(wordsLetter)
    setGameStage(stages[1].name)


  }

  const verifyLetter = (letter) => {
    console.log(letter)

  }
  const newGame = () => {
    setGameStage(stages[0].name)

  }


  return (<div className='App'>
    <GlobalStyle />
    {gameStage === "start" && <ScreenGame startGame={startGame} />}
    {gameStage === "game" && <GameStart
      verifyLetter={verifyLetter}
      pickedWord={pickedWord}
      pickedCategory={pickedCategory}
      letter={letter}
      score={score}
      wrongLetters={wrongLetters}
      guesses={guesses}
      guessedLetters={guessedLetters} />}


    {gameStage === "end" && <EndGame newGame={newGame} />}
  </div>

  )
}

export default App
