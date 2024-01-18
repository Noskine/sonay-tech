import styled from "styled-components";

export const Credits = styled.section`
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #212121;

  nav a {
    gap: 0.5rem;
    font-size: 1.1rem;
    transition: 500ms;
  }

  nav a:hover {
    opacity: 0.6;
    transition: 500ms;
  }

  @media screen and (max-width: 620px) {
    flex-direction: column;
  }

  @media screen and (max-width: 620px) {
    margin: 0;
    nav a {
      font-size: 0.8rem;
    }
  }
`;