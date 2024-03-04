import styled from "styled-components";

export const StyleHeader = styled.header`
  max-width: 100vw;
  width: 100%;
  position: fixed;
  top: 0;
  border-bottom: 1px solid var(--c-dark-zinc);
  background-color: #181818;
  z-index: 10;

  #container-header {
    height: 5vh;
    padding-inline: 5rem;
    padding-block: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--c-black);
  }

  #logo-header {
    width: 25px;
    user-select: none;
  }

  nav ul {
    display: flex;
    align-items: center;
    gap: 1rem;
    list-style: none;
  }

  nav ul li a {
    font-weight: 400;
    color: var(--c-light-zinc);
    transition: 500ms;
  }

  nav ul li a:hover {
    color: var(--c-green);
    opacity: 0.6;
    transition: 500ms;
  }

  i {
    font-size: 2rem;
    margin-top: 5px;
  }

  .header-logotipo {
    width: 10%;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: 300ms;
    cursor: pointer;
  }

  .header-logotipo:hover {
    opacity: 0.6;
    transition: 300ms;
  }

  .header-logotipo p {
    margin-block: 0.2rem;
  }

  #sonay {
    font-size: 1.6rem;
    font-weight: 800;
    user-select: none;
  }

  #menu {
    display: none;
      user-select: none;
    background-color: transparent;
    color: var(--c-dark-zinc);
    border: none;
    font-size: 1.6rem;
    padding: 0;
  }

  #menu svg {
    font-size: 2rem;
  }

  @media screen and (max-width: 560px) {
    nav {
      display: none;
    }

    #container-header {
      padding-inline: 1.5rem;
    }

    #logo-header {
      width: 20px;
    }

    .header-logotipo {
      width: 25%;
    }

    #sonay {
      font-size: 1.4rem;
    }

    #webD {
      font-size: 0.8rem;
    }

    #menu {
      display: block;
    }
  }
    
    .active {
        display: block;
    }
`;

export const Aside = styled.aside`
    display: none;
    position: absolute;
    z-index: -1;
    background-color: #181818;
    width: 80vw;
    min-height: 100vh;
    top: 0;
    left: 0;
    padding: 0 !important;
    padding-top: 10vh !important;
    
    .buttons-social {
        padding: 0;
        
        > a {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            font-size: 1.4rem;
        }
    }
    
    footer {
        width: inherit;
        position: fixed;
        bottom: 0;
    }
    
    hr {
        width: inherit;
        margin-right: 5rem;
    }
    
    ul {
        padding: 0;
        list-style: none;
        
        li {
            margin-right: 5rem;
            width: inherit;
            background-color: var(--c-green);
            margin-bottom: 1.5rem;
            padding: 0.5rem 2rem;
            border-radius: 1rem;
            
            > a {
                color: var(--c-black);
                font-weight: 600;
            }
        }
    }
`