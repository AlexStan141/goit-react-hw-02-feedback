import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option, index) => {
        return (
          <button key={index} onClick={onLeaveFeedback} className={css.button}>
            {option}
          </button>
        );
      })}
    </>
  );
};

export default FeedbackOptions;
