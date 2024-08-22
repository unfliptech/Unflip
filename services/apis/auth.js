export default function (apiClient) {
  if (!apiClient) {
    throw new Error("API client is required");
  }

  return {
    // Send OTP to the user's phone
    sendOTP(phone) {
      return apiClient.post("/api/send-otp", { phone });
    },

    // Verify OTP and get access and refresh tokens
    verifyOTP({ client_id, client_secret, otp, phone }) {
      return apiClient.post("/api/oauth/token", {
        client_id,
        client_secret,
        grant_type: "password",
        otp,
        phone,
      });
    },

    // Refresh the access token
    refreshToken({ client_id, client_secret, refresh_token }) {
      return apiClient.post(
        "/api/oauth/token",
        {
          client_id,
          client_secret,
          grant_type: "refresh_token",
          refresh_token,
        },
        {
          withCredentials: true, // Ensure that cookies are sent with the request
        }
      );
    },

    // Check user authentication status
    authCheck() {
      return apiClient.get("/api/auth-check", {
        withCredentials: true, // Ensure that cookies are sent with the request
      });
    },

    // Logout user
    logout() {
      return apiClient.post(
        "/api/logout",
        {},
        {
          withCredentials: true, // Ensure that cookies are sent with the request
        }
      );
    },
  };
}
