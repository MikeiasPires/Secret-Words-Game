import React, { useState } from "react";
import { COLORSPAN, BOXLETTER, LETTER, BLANKSQUARE, LetterContainer, LetterSelect } from './style'

export default function GameStart({ verifyLetter, pickedWord, pickedCategory, letter, score, wrongLetters, guesses, guessedLetters }) {

    const [letters, setLetters] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        verifyLetter(letters);
        setLetters("")
    }

    return (<div>
        <div>
            <p>
                <span>pontuaçã: {score} </span>
            </p>
            <h1>
                ADIVINHE A PALAVRA
            </h1>
            <h3>
                A dica para a palavra é
                <COLORSPAN>{pickedCategory}</COLORSPAN>
            </h3>
            <h3> Tentativas {guesses} </h3>
            <BOXLETTER>
                {letter.map((letter, i) =>
                    guessedLetters.includes(letter) ?
                        (<span key={i}> <LETTER>{letter}</LETTER></span>)
                        : (<span key={i} >
                            <BLANKSQUARE></BLANKSQUARE></span>))}
            </BOXLETTER>
            <LetterContainer>
                <p>tente adivinhar a letra da palavra</p>
                <form onSubmit={handleSubmit} >
                    <input type="text"
                        name="letter" maxLength="1"
                        required
                        onChange={(e) => setLetters(e.target.value)}
                        value={letters} />

                    <button>JOGAR</button>
                </form>
                <LetterSelect>
                    <p>letras ja utilizadas:</p>
                    {wrongLetters.map((letter, i) => (
                        <span key={i}>{letter},</span>
                    ))}
                </LetterSelect>
            </LetterContainer>
        </div>
    </div >
    )


}
