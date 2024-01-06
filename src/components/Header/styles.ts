import styled from "styled-components";

export const StyleHeader = styled.header`
  width: 100vw;
  position: fixed;
  top: 0;
  border-bottom: 1px solid var(--c-dark-zinc);

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
    background-color: transparent;
    border: none;
    font-size: 1.6rem;
  }

  @media screen and (max-width: 560px) {
    header nav {
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
`;
