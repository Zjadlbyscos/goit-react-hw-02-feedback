import React, { Component } from 'react';
import Header from './header/Header';
import FeedbackOptions from './FeedbackOptions/FeedbackOprions.jsx.jsx';
import Statistics from './statistics/Statistic';

 class App extends Component{
  state = {
        good: 0,
        neutral: 0,
        bad: 0,
      };
      handleButtonClick = (category) => {
        this.setState((prevState) => ({
          [category]: prevState[category] + 1,
        }));
      };
      render() {
            const { good, neutral, bad } = this.state;
        
            return (
              <div>
                <Header />
                <FeedbackOptions onButtonClick={this.handleButtonClick} /> 
                <Statistics good={good} neutral={neutral} bad={bad} />
              </div>
            );
          }


 }
 export default App;
