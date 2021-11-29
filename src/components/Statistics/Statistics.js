import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

// const Statistics = ({ feedbacks, count }) => (
//   <ul className={s.feedback__counts}>
//     {feedbacks.map(item => (
//       <li key={item.id} name={item.name}>
//         {item.name}: {count}
//       </li>
//     ))}
//   </ul>
// );

const Statistics = ({ good, neutral, bad, total, positive }) => (
  <ul className={s.feedback__counts}>
    <li className={s.item}>Good: {good}</li>
    <li className={s.item}>Neutral: {neutral}</li>
    <li className={s.item}>Bad: {bad}</li>
    <li className={s.item}>Total: {total}</li>
    <li className={s.item}>Positive feedback: {positive}%</li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
