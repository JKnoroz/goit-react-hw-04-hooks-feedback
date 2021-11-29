import PropTypes from 'prop-types';
import s from './Notification.module.css';

function Notification({ message }) {
  return <p className={s.note}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
