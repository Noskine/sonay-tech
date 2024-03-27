import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding-block: 2rem;
  padding-inline: 5%;

  .impact {
    font-size: 1rem;
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 1.5rem;
  }
`;

export const Laytou = styled.div`
  .impact {
    font-size: 1rem;
  }

  padding-block: 2rem;
  padding-inline: 5%;
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 1.5rem;
  }
`;

export const BlogSupenseCard = styled.section`
  width: 15%;
  position: relative;
  height: 38vh;
  overflow: hidden;
  background-color: var(--c-black-600);
  padding: 1rem;
  border-radius: 1.6rem;
  box-shadow: 4px 3px 10px 1px #00000035;
  transition: 300ms ease-in;

  .img {
    width: 100%;
    height: 120px;
    margin: 0 auto;
    background-color: #30303090;
    border-radius: calc(1.6rem / 2);
  }

  .text {
    width: 100%;
    height: 20px;
    margin: 0 auto;
    margin-top: 1rem;
    background-color: #30303090;
    border-radius: calc(1.6rem / 3);
  }

  .css-selector {
    background: linear-gradient(249deg, #303030, #323232);
    background-size: 400% 400%;

    -webkit-animation: AnimationName 500ms ease infinite;
    -moz-animation: AnimationName 500ms ease infinite;
    animation: AnimationName 500ms ease infinite;
  }

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 99% 0%;
    }
    50% {
      background-position: 2% 100%;
    }
    100% {
      background-position: 99% 0%;
    }
  }

  @-moz-keyframes AnimationName {
    0% {
      background-position: 99% 0%;
    }
    50% {
      background-position: 2% 100%;
    }
    100% {
      background-position: 99% 0%;
    }
  }

  @keyframes AnimationName {
    0% {
      background-position: 99% 0%;
    }
    50% {
      background-position: 2% 100%;
    }
    100% {
      background-position: 99% 0%;
    }
  }
`;
