import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import {
  countPositiveFeedbackPercentage,
  countTotalFeedback,
} from 'helpers/getCount';

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

  render() {
    return (
      <Section title="Please leave feedback" {...this.props}>
        <FeedbackOptions options={this.state} handleClick={this.handleClick} />
        {countTotalFeedback(this.state) ? (
          <Statistics
            stats={this.state}
            total={countTotalFeedback(this.state)}
            percentage={countPositiveFeedbackPercentage(this.state)}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}
