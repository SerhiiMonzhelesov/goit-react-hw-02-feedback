import styled from 'styled-components';

export const StyledSection = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
  text-shadow: 2px 2px 5px rgba(10, 38, 9, 0.41);
  color: #292a29;
  padding-left: 20px;

  & h2 {
    margin: 40px 0 50px 0;
  }
`;
