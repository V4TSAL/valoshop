import { Endpoints, Headers, returnCookie } from "./utils";

// Define the API route handler
export default async function handler(req, res) {
  // make the request to get the biscuit

  // Define the data to be sent in the request body
  const data = {
    client_id: "play-valorant-web-prod",
    nonce: "1",
    redirect_uri: "https://playvalorant.com/opt_in",
    response_type: "token id_token",
    scope: "account openid",
  };

  // Define the Fetch API options for the POST request
  const options = {
    method: "POST",
    Headers,
    body: JSON.stringify(data),
  };
  let cookie = null;
  const response = await fetch(Endpoints.login, options);
  console.log(response.headers);
  return res.status(200).json({ ok: "done", cookie: returnCookie(response) });
}
