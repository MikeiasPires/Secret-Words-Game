import React from "react";
import { COLORSPAN, BOXLETTER, LETTER, BLANKSQUARE, LetterContainer, LetterSelect } from './style'

export default function GameStart({ }) {

    return (<div>
        <div>
            <p>
                <span>pontuaçã: 000 </span>
            </p>
            <h1>
                ADIVINHE A PALAVRA:
            </h1>
            <h3>
                DICA SOBRE A PALAVRA
                <COLORSPAN>Dica ....</COLORSPAN>
            </h3>
            <BOXLETTER>
                <LETTER>A</LETTER>
                <BLANKSQUARE></BLANKSQUARE>
            </BOXLETTER>
            <LetterContainer>
                <p>tente adivinhar a letra da palavra</p>
                <form >
                    <input type="text" name="letter" maxLength="1" required />
                    <button>JOGAR</button>
                </form>
                <LetterSelect>
                    <p>letras ja utilizadas:</p>
                    <span>a,b</span>
                </LetterSelect>
            </LetterContainer>
        </div>
    </div >
    )


}
