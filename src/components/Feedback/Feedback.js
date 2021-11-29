import React from 'react';
import s from './Feedback.module.css';
import PropTypes from 'prop-types';

const Feedback = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <FeedbackBtn
        key={option.id}
        name={option.name}
        onLeaveFeedback={onLeaveFeedback}
      />
    ))}
  </div>
);

const FeedbackBtn = ({ name, onLeaveFeedback }) => {
  return (
    <button type="button" className={s.FeedbackBtn} onClick={onLeaveFeedback}>
      {name}
    </button>
  );
};

Feedback.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default Feedback;
