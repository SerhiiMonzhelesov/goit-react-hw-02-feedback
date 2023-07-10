import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const feedbackName = e.target.name;
    this.setState(prevState => {
      return { [feedbackName]: prevState[feedbackName] + 1 };
    });
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    const percentage = this.countPositiveFeedbackPercentage(
      total,
      this.state.good
    );
  
    return { total: total, percentage: percentage };
  };

  countPositiveFeedbackPercentage = (total, good) => {
    return Math.round((good / total) * 100) || 0;
  };

  render() {
    const total = this.countTotalFeedback().total;
    const resultsFeedback = this.countTotalFeedback();

    return (
      <Section title="Please leave feedback" {...this.props}>
        <FeedbackOptions options={this.state} handleClick={this.handleClick} />
        {total ? (
          <Statistics stats={this.state} results={resultsFeedback} />
        ) : (
          <Notification message="There is no feedback"/>
        )}
      </Section>
    );
  }
}
