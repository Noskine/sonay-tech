import styled from "styled-components";

export const Readline = styled.section`
  padding-inline: 5%;
  height: 99vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  #element-readline {
    margin: 0 auto;
    display: block;
    opacity: 0.8;
    width: 40%;
  }

  @media screen and (max-width: 830px) {
    #element-readline {
      display: none;
    }
  }


  @media screen and (max-width: 520px) {
    max-width: 100vw;
    padding-inline: 0 !important;
  }
`;

export const Text = styled.section`
  width: 50%;
  user-select: none;
  display: flex;
  flex-direction: column;

  #descript {
    font-size: 1.4rem;
    text-align: justify;
    margin-bottom: 30px;
  }

  .impact {
    max-width: 240px;
    background-color: #42d39249;
    color: #42d392;
    border-radius: 1.5rem;
    padding: 0.8rem 1.4rem;

    font-size: 1.2rem;
    font-weight: 700;
    cursor: default;
  }

  h1 {
    font-size: 4.8rem;
  }

  @media screen and (max-width: 920px) {
    .impact {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 830px) {
    width: 100%;
    align-items: center;
    h1 {
      text-align: center;
    }
  }

  @media screen and (max-width: 520px) {
    padding-inline: 5%;
    .impact {
      font-size: 1rem;
    }

    h1 {
      font-size: 3.2rem;
      text-align: center;
    }
  }
`;

export const ContainerButtons = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;

  .button-readline {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button-readline svg {
    font-size: 1.6rem;
  }

  .button-github {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: transparent;
    color: var(--c-light-zinc);
    border: 1px solid var(--c-light-zinc);
    transition: 300ms ease-in-out;
  }

  .button-github:hover {
    color: var(--c-black);
    background-color: var(--c-background-buttons);
    border: 1px solid var(--c-background-buttons);
    transition: 300ms ease-in-out;
  }
  @media screen and (max-width: 920px) {
    flex-direction: column;
  }

  @media screen and (max-width: 520px) {
    .button-github {
      background-color: var(--c-background-buttons);
      color: var(--c-black);
      border: none;
    }
  }
`;