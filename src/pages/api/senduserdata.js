export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;
  res.status(200).json({
    type: "auth",
    username: `${body.username}`,
    password: `${body.password}`,
    remember: true,
    language: "en_US",
  });
}
