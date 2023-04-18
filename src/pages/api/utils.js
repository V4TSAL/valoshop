export const Headers = {
  "User-Agent":
    "RiotClient/58.0.0.4640299.4552318 rso-auth (Windows;10;;Professional, x64)",
};

export const Endpoints = {
  login: "https://auth.riotgames.com/api/v1/authorization",
};

export function returnCookie(response) {
  return response.headers.get("set-cookie");
}
