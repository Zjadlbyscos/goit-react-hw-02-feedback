import React, { Component } from 'react';
import css from "./statistic.module.css"

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total,positivePercentage} = this.props;
    return (
      <div className={css.wrapper}>
        <p className={css.item}>Good: {good}</p>
        <p className={css.item}>Neutral: {neutral}</p>
        <p className={css.item}>Bad: {bad}</p>
        <p className={css.item__total}>Total: {total}</p>
        <p className={css.item__total}>Positive Percentage: {positivePercentage}</p>

      </div>
    );
  }
}

export default Statistics;
