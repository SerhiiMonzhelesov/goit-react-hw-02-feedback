import StyledFeedbackOptions from './StyledFeedbackOptions';

function FeedbackOptions({ options, handleClick }) {
  const arrNamesOptions = Object.keys(options);
  return (
    <StyledFeedbackOptions>
      {arrNamesOptions.map((name) => {
        return (
          <button type="button" onClick={handleClick} key={name} name={name}>
            {name}
          </button>
        );
      })}
    </StyledFeedbackOptions>
  );
}

export default FeedbackOptions;
