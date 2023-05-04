import { Endpoints, Headers, genAsid } from "./utils";
export default async function handler(req, res) {
  const cookie = await genAsid();
  console.log(cookie);
  if (!cookie.asidPresent) {
    return res.status(503).json({ asid: "NOT FOUND" });
  }
  const body = req.body;
  console.log("newo", body.cookie);
  const send_pass = JSON.stringify({
    type: "auth",
    username: body.username,
    password: body.password,
    remember: true,
    language: "en_US",
  });

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
  const resp = await response.json();
  console.log("meow", resp.type);
  if (resp.type !== "multifactor") {
    return res
      .status(200)
      .json({
        res: resp,
        asid: cookie,
        token: { access_token: "sample", id_token: "samplemwoe" },
      });
  }
  return res.redirect("/twofa?asid=" + cookie.asid);
}
