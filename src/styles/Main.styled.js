import styled from "styled-components";
import { media } from "./media";
import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    *, ::after, ::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    #root {
         display: flex;
         /* align-items: center; */
         //overflow-y: scroll;
        justify-content: center;
        /* flex-direction: column; */
        height: 38rem; 
        ${media.lessThan("sm")`
          height: 100%;
       `}
    }

    body {
        height: 100vh;
        background-color: #023047;
        padding: 5rem 4rem;
       // padding: 5rem 10rem;
       
       ${media.lessThan("lg")`
        padding: 5rem 1rem;
         
       `}

       ${media.lessThan("sm")`
          padding:1.2rem 1rem ;
       
       `}
    }
    li {
//list-style-type: none;
      margin-left: 1.5rem;
      font-family: var(--secondary-font);
      font-weight: 500;
      color: var(--primary-color);
      margin-block: .85rem;
font-size: clamp(.93rem, 1vw, 1rem);
      p {
        font-weight: 400;
        margin-block: .28rem;
        font-family:  'Montserrat', sans-serif;
      }
    }
    hr {
    height: 2px;
    width: 100%;
    margin-bottom: .9rem;
    border-top: 2px solid var(--lightorange) ;
   // background-color: var(--lightorange) !important;
  }
`;

export const Main = styled.main`
  gap: 1rem;
  height: 100%;
  display: flex;
  max-width: 55rem;
  // min-width: 600px;
  overflow-y: hidden;
  overflow-y: scroll;
  word-wrap: break-word;
  // word-break: break-all;
  background-color: #fff;
  flex-direction: column;
  border-radius: 4px;
  padding: clamp(.2rem, 1vw, 1.5rem);
  justify-content: space-between;

  ${media.lessThan("lg")`
      min-width: 100%;
      //padding: ;
  `}

  .err_msg {
    font-size: clamp(.9rem, 1vw, 1.1rem);
  }
  .ms-2 {
    margin-left:clamp(.75rem, 1vw, 1.2rem);
    
  }

  a {
    font-weight: 600;
    text-decoration: none;
    font-style: normal !important;
    color: var(--primary-color);
    font-family: var(--primary-font);
  }
  h1 {
    cursor: pointer;
    font-family: var(--primary-font);
    //font-size: clamp(1rem, 1rem + 8vw, 2.1rem );
    font-size: clamp(1rem, 1rem + 2vw, 1.75rem);
    font-weight: 400;
  }
  label {
    gap: 4rem;
    display: flex;
    margin-top: .6rem;
    margin-bottom: 2rem;
    align-items: center;
    justify-content: space-evenly;
    /* padding: 2em; */
    /*  @media (min-width: 600px ){
        display: flex;
        align-items: center;
        gap: 4.5625rem;
        width: 100%;
        flex-direction: column;
    }
    @media (min-width: 700px){
        flex-direction: row;
    } */
    ${media.lessThan("md")`
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin-top: .9rem;
    `}

    #searchBar {
      width: 100%;
      height: 100%;
      padding: 0.3rem;
      min-width: 4rem;
      font-size: 0.9rem;
      border-radius: var(--border-radius);
      border: 1px solid var(--primary-color);
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      background-color: #e9e9e9;
      border-color: transparent;
      outline: none;
      &:focus,
      &:active {
        outline: none;
      }
    }
  }
  .searchbar {
    width: 27rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    
    ${media.lessThan("sm")`
        width: 100%;
        height: 2.29rem;

       `}
    span#lang {
      color: #fff;
      width: 10rem;
      font-size: clamp(0.7rem, 0.8rem + 1vw, 1.28rem);
      padding: 0.5rem 1.5rem;
      font-family: var(--secondary-font);
      background-color: var(--primary-color);
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
      text-align: center;
      ${media.lessThan("sm")`
          padding:.5rem .7rem ;
          width: 37%;
       `}
    }
    .searchbtn {
      z-index: 2;
      margin-left: -1.7rem;
      background-color: #e9e9e9;
    }
  }
`;

export const Res = styled.section`
  display: flex;
  flex-direction: column;
  .me-1 {
    margin-right: 0.4rem;
  }

  .word__pos {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    h1 {
      font-weight: 700;
      text-transform: capitalize;
      color: var(--primary-color);
      font-size: clamp(1.5rem, 1rem + 3vw, 2.25rem);
      font-family: var(--primary-font);
    }
    p.pos {
      font-family: var(--secondary-font);
      color: #888989;
      font-size: clamp(0.9rem, 1vw, 1.1rem);
    }
  }

  .netics {
    color: #2f2f2f;
    font-weight: 500;
    font-family: var(--secondary-font);
    font-size: clamp(0.98rem, 1vw, 1.2rem);
    margin-block: 8px;
    span {
      cursor: pointer;
    }
  }

  .syno {
    color: var(--primary-color);
    font-size: clamp(.85rem, 1vw, 1rem);
    font-weight: 500;
    font-family: var(--secondary-font);
    margin-bottom: 0.2rem;
    /* padding-bottom: .6rem;
    border-bottom: 2px solid orange; */
    ${media.lessThan("sm")`
         // padding:1.2rem 1rem ;
       
       `}
  }
`;
