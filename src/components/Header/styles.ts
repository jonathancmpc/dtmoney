import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    border: 0;
    padding: 0rem 2rem;
    background: var(--blue-light);
    color: #fff;
    border-radius: 0.25rem;
    height: 3rem;

    &:hover{
      filter: brightness(0.9);
    }

    &:focus {
      outline-width: 0px;
    }
  }
`;