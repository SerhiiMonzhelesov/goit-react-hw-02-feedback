import styled from 'styled-components';

const StyledFeedbackOptions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  & button {
    box-sizing: border-box;
    padding: 8px;
    width: 100px;
    font-size: 18px;
    letter-spacing: 0.06em;
    border-radius: 7px;
    border: 1px solid #eee7b2;
    color: #4d7474;
    background: #eee7b2;
    cursor: pointer;
  }

  & button:hover {
    background: #dde0a9;
    color: #554964;
    box-shadow: 0px 0px 5px 2px rgba(220, 215, 215, 0.71);
    font-weight: bold;
    border: 1px solid #c3c4c1;
  }
`;

export default StyledFeedbackOptions;
