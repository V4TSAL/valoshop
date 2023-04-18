const twofactor = () => {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target.elements.username.value);
    console.log(event.target.username.value);
    console.log(this.inputNode.value);
  };
  render();
  return (
    <form className="mainform" onSubmit={this.handleSubmit}>
      <h1 className="loginhead">Enter the 6 digit code</h1>
      <input
        type="text"
        className="form-control"
        id="floatingPassword"
        placeholder="Enter the two factor authentication code"
        ref={(node) => (this.inputNode = node)}
      />
      <button className="logbut">Submit</button>
    </form>
  );
};

export default twofactor;
