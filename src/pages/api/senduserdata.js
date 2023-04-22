import { Endpoints, Headers, genAsid } from "./utils";

export default async function handler(req, res) {
  const cookie = await genAsid();
  console.log(cookie);
  if (!cookie.asidPresent) {
    return res.status(503).json({ asid: "NOT FOUND" });
  }
  const body = req.body;
  const send_pass = JSON.stringify({
    type: "auth",
    username: body.username,
    password: body.password,
    cookie: body.cookie,
    remember: true,
    language: "en_US",
  });
  Headers.cookie = body.cookie;
  const options = {
    method: "PUT",
    headers: {
      ...Headers,
      cookie: `asid=${cookie.asid}`,
    },
    body: send_pass,
  };
  const response = await fetch(Endpoints.login, options);

  console.log(Headers, send_pass);
  return res.status(200).json({ res: await response.json() });
}
