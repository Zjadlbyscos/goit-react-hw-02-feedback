import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './buttons.module.css'


export default class Buttons extends Component {

  renderButtons() {
    const categories = ['good', 'neutral', 'bad'];
    const { onButtonClick } = this.props;

    return categories.map(category => {
      return (
        <button className={css.button} key={category} onClick={()=> onButtonClick(category) }>
          {category.toLocaleUpperCase().charAt(0) + category.slice(1)}
        </button>
      );
    });
  }
  render() {
    return <div className={css.buttons}>{this.renderButtons()}</div>;
  }
}
Buttons.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
