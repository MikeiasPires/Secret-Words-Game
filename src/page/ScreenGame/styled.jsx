import styled from "styled-components";

export const Title = styled.h1`
    color: black;
`
export const ButtonGame = styled.button`
    
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: white;
    color: black;
    border: 2px solid white;
    font-weight: bold;
    cursor: pointer;
    transition: 0.4;
    
    &:hover {
    background-color: transparent;
    color: transparent;
}
`