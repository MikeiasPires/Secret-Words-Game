import styled from "styled-components";

export const COLORSPAN = styled.span`
    color: yellow;
`
export const BOXLETTER = styled.div`
    margin: 1.5em;
    padding: 1.5em;
    border: 20px solid black;
    display: flex;

`
export const LETTER = styled.span`
    font-size: 70px;
    border: 3px solid black;
    height: 100px;
    width: 100px;
    line-height: 1.5;
    text-transform: uppercase;
    background-color: white;
    color: black;
`

export const BLANKSQUARE = styled.span`
    font-size: 70px;
    border: 3px solid black;
    height: 100px;
    width: 100px;
    line-height: 1.5;
    text-transform: uppercase;
    background-color: white;
    color: black;
    
`

export const LetterContainer = styled.div`
    p{
        margin-bottom: 1.2em;
    }
    
    form{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    input{
        height: 50px;
        width: 50px;
        font-size: 2.0em;
        text-align: center;
        margin-right: 1em;
        background-color: white;
        border:solid black 4px;

    }
    button{
    display: inline-block;
    border-radius: 3px;
    height: 50px;
    padding: 10px;
    background: white;
    color: black;
    border: 2px solid white;
    font-weight: bold;
    cursor: pointer;
    transition: 0.4;
    }
`
export const LetterSelect = styled.div`
    
    p{

        font-size: 20px;
        text-transform: uppercase;


    }

    span{
        font-size: 18px;
        text-transform: uppercase;

    }
`