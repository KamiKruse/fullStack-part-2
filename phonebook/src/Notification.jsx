const Notification = (props) => {
  return (
    <>
      {props.isSuccess ? (
        <div className="success">Added {props.newName}</div>
      ) : props.isPhoneUpdated ? (
        <div className="success">
          Updated {props.newName}'s number to {props.newPhone}
        </div>
      ) : props.errorState ? (
        <div className="error">
          Information of {props.newName} has already been removed from the
          server
        </div>
      ) : null}
    </>
  );
};
export default Notification;
