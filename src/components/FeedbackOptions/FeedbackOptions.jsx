import StyledFeedbackOptions from "./StyledFeedbackOptions";

function FeedbackOptions({options, handleClick}) {
    
    return <StyledFeedbackOptions>
        {Object.keys(options).map((option, idx) => {
            return <button onClick={handleClick} key={idx} name={option}>{option}</button>
        })}
    </StyledFeedbackOptions>
}

export default FeedbackOptions;