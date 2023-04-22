import { Endpoints, Headers, returnCookie, genAsid } from "./utils";
export default async function handler(req, res) {
  const body = req.body;
  const twofacode = JSON.stringify({
    type: "multifactor",
    code: `${body.twofactor}`,
    rememberDevice: true,
  });
}
