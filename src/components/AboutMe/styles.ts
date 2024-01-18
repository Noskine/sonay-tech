import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  padding-inline: 5%;
  background-color: var(--c-black-600);
  display: flex;
  gap: 3rem;
  box-shadow: var(--shadow);

  img {
    width: 400px;
    border-radius: 2rem;
    box-shadow: var(--shadow);
    object-fit: cover;
  }

  .about {
    font-weight: 700;
    color: var(--c-background-buttons);
  }

  p {
    font-size: 1.3rem;
    font-weight: 400;
    text-align: justify;
  }

  #myName {
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 2.5rem;
  }

  #myStacks {
    font-size: 2rem;
    font-weight: 500;
    line-height: 1rem;
  }

  @media screen and (max-width: 960px) {
    img {
      width: 40%;
    }
  }

  @media screen and (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    padding-inline: 0;
    padding-block: 10px;

    img {
      width: 95%;
    }
    .text-about {
      width: 90%;
    }
  }
`;

export const Social = styled.section`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;

  .stack {
    width: 50px;
    height: 50px;
    border: 1px solid var(--c-black-zinc);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 300ms;
  }

  .stack:nth-child(1) {
    border-radius: 0 50%;
  }

  .stack:nth-child(3) {
    border-radius: 40% 0;
  }
  .stack:nth-child(2) {
    border-radius: 40%;
  }
  .stack:nth-child(4) {
    border-radius: 50% 50% 0 50%;
  }

  .stack:hover {
    border: 1px solid var(--c-green);
    transition: 300ms;
  }

  .stack:hover > svg {
    color: var(--c-green);
    transition: 300ms;
  }

  svg {
    font-size: 2rem;
    color: var(--c-black-zinc);
  }

  @media screen and (max-width: 720px) {
    justify-content: center;
  }
`;
