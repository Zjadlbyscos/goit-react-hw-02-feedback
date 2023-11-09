import React from 'react';
import PropTypes from 'prop-types';
import css from './feedbacOptions.module.css'

const FeedbackOptions = ({ onButtonClick }) => {
  const categories = ['good', 'neutral', 'bad'];

  const renderButtons = () => {
    return categories.map((category) => (
      <button
        key={category}
        className={css.button}
        onClick={() => onButtonClick(category)}
      >
        {category.toLocaleUpperCase().charAt(0) + category.slice(1)}
      </button>
    ));
  };

  return <div className={css.buttons}>{renderButtons()}</div>;
};

FeedbackOptions.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
export default FeedbackOptions;

