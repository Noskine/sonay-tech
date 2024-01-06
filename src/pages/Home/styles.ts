import styled from "styled-components";

export const Container = styled.body`
  #container-readline {
  }

  .text {
    width: 60%;
  }

  .title {
    user-select: none;
    text-align: center;
    font-size: 6.4rem;
    font-weight: 900;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    user-select: none;
    font-size: 1.8rem;
    text-align: center;
    text-transform: capitalize;
    color: var(--c-dark-zinc);
  }

  #readline-buttons {
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: center;
  }

  .github {
    background-color: var(--c-green);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 860px) {
    .text {
      width: 80%;
    }
  }

  @media screen and (max-width: 620px) {
    .title {
      font-size: 4.8rem;
    }
  }

  @media screen and (max-width: 420px) {
    #container-readline {
      height: 70vh;
    }

    .text {
      width: 100%;
    }

    .title {
      font-size: 3.2rem;
    }

    .subtitle {
      font-size: 1.4rem;
    }

    #readline-buttons {
      flex-direction: column;
    }

    #readline-buttons button {
      width: 70%;
    }
  }
`;

export const Readline = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid var(--c-dark-zinc);
`;
