import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    padding: 5px;
    margin: 0;
    background-color: #c29b71;
    
}
body{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    color:white
}
`
export default GlobalStyle;