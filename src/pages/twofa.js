import VImage from "../components/VImages";
import VImage2 from "../components/VImage2";
import { useEffect, useState } from "react";
import { FormProvider } from "react-hook-form";
import { use2Fa } from "@/components/hooks/use2fa";
import { TextField } from "@mui/material";

// const submitContact = async (event) => {
//   event.preventDefault();
//   var codejsn = {};
//   const code = event.target.name.value;
//   codejsn.twofacode = code;
//   console.log(codejsn);
//   // alert(`So your two factor authentication code is ${code}?`);
// };
const Twofactor = () => {
  const [asid, setAsid] = useState("");
  const {authenticationForm,getAccessToken, register} = use2Fa()
  useEffect(() => {
    const queryParams = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    setAsid(encodeURIComponent(queryParams.asid));
    console.log("ASID A GAYA BHAIYA", asid);
  }, [asid]);
  return (
    <div>
      <VImage />
      <VImage2 />
      <FormProvider {...authenticationForm}>
        <TextField label='Enter OTP' {...register('otp')}/>

      </FormProvider>
    </div>
  );
};

export default Twofactor;
