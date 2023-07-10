function Statistics({ stats: { good, neutral, bad }, results }) {
   
    return <>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {results.total}</p>
    <p>Positive feedback: {results.percentage} %</p>
    </>
}

export default Statistics;