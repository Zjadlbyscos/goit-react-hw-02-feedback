import React, { Component } from 'react';
import Header from './header/Header';
import FeedbackOptions from './FeedbackOptions/FeedbackOprions.jsx.jsx';
import Statistics from './statistics/Statistic';
import Section from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleButtonClick = category => {
    this.setState(prevState => ({
      [category]: prevState[category] + 1,
    }));
  };

  totalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.totalFeedback(this.state);
    return totalFeedback === 0 ? 0 : Math.round((this.state.good / totalFeedback) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.totalFeedback({ good, neutral, bad });
    const positivePercentage = this.countPositiveFeedbackPercentage();
    // console.log(total);
    console.log(positivePercentage);
    return (
      <div>
         <Section title="Please leave feedback">
        <FeedbackOptions onButtonClick={this.handleButtonClick} />
        </Section>
        <Section title="Statistics">
        {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}   />)
          :(<Header />)}
          </Section>
     
      </div>
    );
  }
}
export default App;
