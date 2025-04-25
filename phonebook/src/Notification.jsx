const Notification = (props) => {
  return (
    <>
      {props.isSuccess ? (
        <div className="success">Added {props.notifiedName}</div>
      ) : props.isPhoneUpdated ? (
        <div className="success">
          Updated {props.notifiedName}'s number to {props.newPhone}
        </div>
      ) : props.errorState ? (
        <div className="error">
          {props.notifiedName.startsWith("Entry")
            ? props.notifiedName
            : `Information of ${props.notifiedName} has already been removed from the
          server`}
        </div>
      ) : null}
    </>
  );
};
export default Notification;
