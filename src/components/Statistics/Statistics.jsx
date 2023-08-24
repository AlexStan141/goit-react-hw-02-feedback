import React from 'react';
import Notification from 'components/Notification/Notification';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total > 0) {
    return (
      <>
        <h1>Statistics</h1>
        <h2>Good: {good}</h2>
        <h2>Neutral: {neutral}</h2>
        <h2>Bad: {bad}</h2>
        <h2>Total: {total}</h2>
        <h2>Positive feedback: {positivePercentage}%</h2>
      </>
    );
  } else {
    return <Notification message="There is no feedback"></Notification>;
  }
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};

export default Statistics;
