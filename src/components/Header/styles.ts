import styled from "styled-components"

export const Container = styled.header `
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 10vh;

  padding: 0 4rem;

  background-color: var(--purple-300);

  > img{
    height: 2.2rem;
    width: 4rem;
  }
`;