import React from "react";


export default function EndGame({ newGame }) {
    return (<>
        <h1>FIM</h1>
        <button onClick={newGame}>
            Start</button>
    </>
    )
}