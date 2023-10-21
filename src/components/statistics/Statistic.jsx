import React, { Component } from 'react';

class Statistics extends Component {
  render() {
    const { good, neutral, bad } = this.props;
    return (
      <div>
        <h3>Statistic</h3>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
    );
  }
}

export default Statistics;
