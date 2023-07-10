function FeedbackOptions({options}) {
    
    return <>{Object.keys(options).map((option, idx) => {
        return <button key={idx} name={option}>{option}</button>
    })}</>
}

export default FeedbackOptions;