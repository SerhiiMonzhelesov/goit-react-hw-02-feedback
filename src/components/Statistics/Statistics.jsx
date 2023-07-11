import StyledStatistics from "./StyledStatistics";

function Statistics({ stats, results }) {

  const arrStatsItem = Object.entries({ ...stats, ...results })
  
  return (
    <StyledStatistics>
      {arrStatsItem.map(([name, value]) => {
        return (
          <li key={name}>
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
