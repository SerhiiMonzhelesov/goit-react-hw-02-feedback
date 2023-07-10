import StyledStatistics from "./StyledStatistics";

function Statistics({ stats, results }) {
  const allStatsItem = { ...stats, ...results };

  return (
    <StyledStatistics>
      {Object.entries(allStatsItem).map(([name, value], idx) => {
        return (
          <li key={idx}>
            <p>
              {name}: {name === "percentage"? value + ' %' : value}
            </p>
          </li>
        );
      })}
    </StyledStatistics>
  );
}

export default Statistics;
