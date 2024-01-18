import styled from "styled-components";

export const CardStyle = styled.div`
  width: 20%;
  height: 32vh;
  overflow: hidden;
  background-color: var(--c-black-600);
  padding: 1rem;
  border-radius: 2.5rem;
  box-shadow: 4px 3px 10px 1px #00000035;
  transition: 300ms ease-in;

  &:hover {
    transform: scale(1.1);
    transition: 300ms ease-in;
  }

  figure {
    width: 100%;
    height: 120px;
    margin: 0 auto;
  }

  figure img {
    width: inherit;
    height: inherit;
    background-color: var(--c-ligth-zinc);
    object-fit: cover;
    object-position: top;
    border-radius: calc(2.5rem / 2);
  }
`;
