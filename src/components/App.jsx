import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOprions.jsx.jsx';
import Statistics from './statistics/Statistic';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const App = () => {

const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);

const handleButtonClick = (category) => {
  const setters = {
    good: setGood,
    neutral: setNeutral,
    bad: setBad,
  };

  setters[category](prevValue => prevValue + 1);
};

// const handleButtonClick = (category) => {
//   switch (category) {
//     case 'good':
//       setGood(prevGood => prevGood + 1);
//       break;
//     case 'neutral':
//       setNeutral(prevNeutral => prevNeutral + 1);
//       break;
//     case 'bad':
//       setBad(prevBad => prevBad + 1);
//       break;
//     default:
//       break;
//   }
// };

 const totalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = totalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions onButtonClick={handleButtonClick} />
      </Section>
      <Section title="Statistics">
        {totalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage() + '%'}
          />
        ) : (
          <Notification message="There is no feedback!" />
        )}
      </Section>
    </div>
  );
};

export default App;