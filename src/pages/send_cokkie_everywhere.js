import { useEffect, useState } from "react";

const Sendcookieeverywhere = () => {
  const [cukie, setCukie] = useState(null);
  useEffect(() => {
    fetch("/api/get_cookie")
      .then((response) => {
        return response.json();
      })
      .then((cookie) => {
        console.log(cookie);
        setCukie(cookie);
      });
  }, []);

  return (
    <div>
      <form action="/api/sendtwofa" method="post">
        <input
          type="hidden"
          id="postId"
          name="cookie"
          value={JSON.stringify(cukie)}
        />
      </form>
    </div>
  );
};
export default Sendcookieeverywhere;
