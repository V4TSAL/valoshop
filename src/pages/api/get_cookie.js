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
    headers: Headers,
    body: JSON.stringify(data),
  };

  const response = await fetch(Endpoints.login, options);

  let cookie = returnCookie(response);
  if (cookie.asid === undefined) {
    return res.status(404).json({
      ok: "NotfoundAsid",
      cookie: cookie,
      status: response.status,
      raw: response.headers.get("set-cookie"),
    });
  } else {
    return res.status(200).json({ ok: "foundAsid", cookie: cookie });
  }
}
