// Import the necessary modules

// Define the API route handler
export default async (req, res) => {
  try {
    // Define the URL and headers
    const url = "https://auth.riotgames.com/api/v1/authorization";
    const headers = {
      "User-Agent":
        "RiotClient/58.0.0.4640299.4552318 rso-auth (Windows;10;;Professional, x64)",
    };

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
      headers,
      body: JSON.stringify(data),
    };

    // Make the POST request using fetch
    const response = await fetch(url, options);
    if (!response.ok) {
      console.log(response);
      throw new Error("Failed to fetch");
    }
    const responseData = await response.json();

    // Send the response data back to the client
    res.status(200).json(responseData);
  } catch (error) {
    // Handle any errors that occur during the request
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to make POST request" });
  }
};
