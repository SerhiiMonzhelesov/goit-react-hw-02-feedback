import StyledStatistics from './StyledStatistics';
import PropTypes from 'prop-types';

function Statistics({ stats, results }) {
  const arrStatsItem = Object.entries({ ...stats, ...results });

  return (
    <StyledStatistics>
      {arrStatsItem.map(([name, value]) => {
        return (
          <li key={name}>
            <p>
              {name}: {name === 'percentage' ? value + ' %' : value}
            </p>
          </li>
        );
      })}
    </StyledStatistics>
  );
}

export default Statistics;

Statistics.propTypes = {
  stats: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  results: PropTypes.shape({
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
