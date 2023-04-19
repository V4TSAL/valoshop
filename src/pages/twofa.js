import VImage from "../components/VImages";
import VImage2 from "../components/VImage2";
// const submitContact = async (event) => {
//   event.preventDefault();
//   var codejsn = {};
//   const code = event.target.name.value;
//   codejsn.twofacode = code;
//   console.log(codejsn);
//   // alert(`So your two factor authentication code is ${code}?`);
// };
const twofactor = () => {
  return (
    <div>
      <VImage />
      <VImage2 />
      <form className="mainform" action="/api/sendtwofa" method="post">
        <h1 className="loginhead">Enter the 6 digit code</h1>
        <input
          type="text"
          className="form-control"
          id="twofactor"
          placeholder="Enter the two factor authentication code"
          name="twofactor"
        />
        <button type="submit" className="logbut">
          Submit
        </button>
      </form>
    </div>
  );
};

export default twofactor;
