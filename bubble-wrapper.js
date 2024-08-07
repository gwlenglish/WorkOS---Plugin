import { getAuthorizationURL } from "./auth.js";

async function getAuth(connection) {
  const auth = getAuthorizationURL(connection);
  return auth;
}
