import StyledNotification from "./StyledNotification";

function Notification({message}) {
    return <StyledNotification className="notification">{message}</StyledNotification>
}

export default Notification;