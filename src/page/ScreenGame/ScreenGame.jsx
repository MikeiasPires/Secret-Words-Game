import React from 'react'
import  { Title, ButtonGame } from './styled'


export default function ScreenGame({ startGame, }) {
    return (
        <>
            <Title>Secret Word</Title>
            <h4>CLICK NO BOTÃO PARA COMEÇAR</h4>
            <ButtonGame className="ButtonGame" onClick={startGame}>
                Start</ButtonGame>
        </>
    )
}


