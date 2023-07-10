import StyledFeedbackOptions from './StyledFeedbackOptions';
import { nanoid } from 'nanoid';

function FeedbackOptions({ options, handleClick }) {
  return (
    <StyledFeedbackOptions>
      {Object.keys(options).map((option) => {
        return (
          <button onClick={handleClick} key={nanoid()} name={option}>
            {option}
          </button>
        );
      })}
    </StyledFeedbackOptions>
  );
}

export default FeedbackOptions;
