import StyledFeedbackOptions from './StyledFeedbackOptions';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, handleClick }) {
  const arrNamesOptions = Object.keys(options);

  return (
    <StyledFeedbackOptions>
      {arrNamesOptions.map(name => {
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

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};
