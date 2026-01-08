import axios from "axios";

/* 

1. Short Lived Access Token
  - Initial Token received from Instagram after authentication
  - Obtained through the OAuthflow in the `generateTokens` function
  - Validity: 1 hour
  - Exchanged for Long Lived Token

2. Long Lived Access Token
  - Validity: 60 days
  - Used to make requests to the Instagram API
  - Used for making API calls over an extended period without requiring the user to re-authenticate.


3. Refresh Access Token
  - Used to refresh the long-lived access token
  - Validity: Called Periodically
  - Used to maintain access to the Instagram API

*/

//Refresh Instagram access token to maintain access
export const refreshToken = async (token: string) => {
  const refresh_token = await axios.get(
    `${process.env.INSTAGRAM_BASE_URL}/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`
  );

  return refresh_token.data;
};