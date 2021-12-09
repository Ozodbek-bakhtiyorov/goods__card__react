import {createGlobalStyle} from "styled-components";
export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: none;
    list-style: none;
    color: #9daccb;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: darkred;}
  
    body {
    background: #120525;
  }
  .container{
    width: 90%;
    margin:0 auto;
  }
  @media screen and (max-width: 480px) {
    .container{width:100%;
    margin 5px auto ;
    }
      
  }
`