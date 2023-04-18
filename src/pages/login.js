import VImage from "../components/VImages";
import VImage2 from "../components/VImage2";
const login = () => {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target.elements.username.value);
    console.log(event.target.username.value);
    console.log(this.inputNode.value);
  };
  render();
  return (
    <div className="formdiv">
      <VImage />
      <VImage2 />
      <form className="mainform" onSubmit={this.handleSubmit}>
        <h1 className="loginhead">Enter your username and password</h1>
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="Username"
        />
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <button className="logbut">Submit</button>
      </form>
    </div>
  );
};

export default login;
