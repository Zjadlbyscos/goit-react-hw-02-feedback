import React, { Component } from 'react';
import css from "./statistic.module.css"

class Statistics extends Component {
  render() {
    const { good, neutral, bad } = this.props;
    return (
      <div className={css.wrapper}>
        <h3 className={css.title}>Statistic</h3>
        <p className={css.item}>Good: {good}</p>
        <p className={css.item}>Neutral: {neutral}</p>
        <p className={css.item}>Bad: {bad}</p>
      </div>
    );
  }
}

export default Statistics;
