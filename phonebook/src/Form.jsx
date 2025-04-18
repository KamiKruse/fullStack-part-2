const Form = (props)=>{
    return (
      <form>
        <div>
          name: <input value={props.newName} onChange={props.handleNameChange} />
        </div>
        <div>
          number: <input value={props.newPhone} onChange={props.handlePhoneChange} />
        </div>
        <div>
          <button onClick={props.handleClick} type="submit">
            add
          </button>
        </div>
      </form>
    );
}
export default Form
