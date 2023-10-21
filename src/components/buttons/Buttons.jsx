import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Buttons extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  renderButtons() {
    const categories = ['good', 'neutral', 'bad'];
    return categories.map(category => {
     return <button key={category}>{category.toLocaleUpperCase().charAt(0)+ category.slice(1)}</button>;
    });
  }
  render() {
    return (
      <div>
        {this.renderButtons()}

      </div>
    );
  }
}
Buttons.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };
  