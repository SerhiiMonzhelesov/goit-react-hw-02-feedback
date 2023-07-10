import { Component } from 'react'
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0  
  };

  render() {
    return <Section title="Please leave feedback" {...this.props}
    >
      <FeedbackOptions options={this.state} />
      <div>axaxa</div>
    </Section>
  }

 }