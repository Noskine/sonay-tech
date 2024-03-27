import styled from "styled-components";

export const CardStyle = styled.div`
  width: 15vw;
  position: relative;
  height: 38vh;
  overflow: hidden;
  background-color: var(--c-black-600);
  padding: 1rem;
  border-radius: 1.6rem;
  box-shadow: 4px 3px 10px 1px #00000035;
  transition: 300ms ease-in;

  &:hover {
    transform: scale(1.06);
    transition: 200ms;
    border: 2px solid var(--c-green);
    cursor: pointer;
  }

  &:after {
    content: "leia mais...";
    position: absolute;
    bottom: 10px;
    right: 10px;
    text-decoration: underline;
    color: var(--c-green);
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
    border-radius: calc(1.6rem / 2);
    box-shadow: var(--shadow);
  }

  h3 {
    width: 100%;
    font-size: 1.6rem;
    line-height: 1.8rem;
    user-select: none;
  }
`;
