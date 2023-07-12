import StyledNotification from './StyledNotification';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return (
    <StyledNotification className="notification">{message}</StyledNotification>
  );
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
