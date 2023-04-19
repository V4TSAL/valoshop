import VImage from "../components/VImages";
import VImage2 from "../components/VImage2";
// this function will send the data according to the documentation of riot games API
// export const submitUsernamePass = async (event) => {
//   event.preventDefault();
//   var userpassjsn = {};
//   const user = event.target.username.value;
//   const pass = event.target.password.value;
//   userpassjsn.type = "auth";
//   userpassjsn.username = user;
//   userpassjsn.password = pass;
//   userpassjsn.remember = true;
//   userpassjsn.language = "en_US";
//   console.log(userpassjsn);
//   const res = await fetch("/api/senduserdata", {
//     body: JSON.stringify({ userpassjsn }),
//     headers: {
//       "Content-Type": "application/json",
//     },

//     method: "POST",
//   });
// };

const login = () => {
  return (
    <div className="formdiv">
      <VImage />
      <VImage2 />
      <form className="mainform" action="/api/senduserdata" method="post">
        <h1 className="loginhead">Enter your username and password</h1>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Username"
          name="username"
        />
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          name="password"
        />
        <button className="logbut">Submit</button>
      </form>
    </div>
  );
};

export default login;
