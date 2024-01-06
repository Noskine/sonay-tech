import styled from "styled-components";

export const Readline = styled.section`
  padding-inline: 5%;
  height: 80vh;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--c-dark-zinc);

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

    width: 100%;
  }

  @media screen and (max-width: 520px) {
    align-items: center;

    padding-inline: 5%;
    .impact {
      font-size: 1rem;
    }

    h1 {
      font-size: 2.8rem;
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

  @media screen and (max-width: 520px) {
    flex-direction: column;

    .button-github {
      background-color: var(--c-background-buttons);
      color: var(--c-black);
      border: none;
    }
  }
`;
