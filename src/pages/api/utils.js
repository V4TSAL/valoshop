export const Headers = {
  "User-Agent":
    "RiotClient/60.0.6.4770705.4749685 rso-auth (Windows;10;;Professional, x64)",
  "Content-Type": "application/json",
};

export const Endpoints = {
  login: "https://auth.riotgames.com/api/v1/authorization",
};

export function returnCookie(response) {
  return cookieToJSON(response.headers.get("set-cookie"));
}

function cookieToJSON(cookie) {
  var output = {};
  cookie.split(/\s*;\s*/).forEach(function (pair) {
    pair = pair.split(/\s*=\s*/);
    var name = pair[0].replace(/Secure, /g, "");
    var value = pair.splice(1).join("=");
    output[name] = value;
  });
  return output;
}

export async function genAsid() {
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
    return {
      asidPresent: false,
    };
  } else {
    return {
      asidPresent: true,
      asid: cookie.asid,
    };
  }
}
