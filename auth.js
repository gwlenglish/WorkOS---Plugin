import { WorkOS } from "@workos-inc/node";
require("dotenv").config();

async function getAuthorizationURL(connection) {
  const workos = new WorkOS(process.env.WORKOS_API_KEY);
  const authorizationUrl = workos.sso.getAuthorizationUrl({
    connection: connection,
    clientId: process.env.WORKOS_CLIENT_ID,
    redirectUri: process.env.WORKOS_REDIRECT_URI,
    //state: "dj1kUXc0dzlXZ1hjUQ==",
  });
  const result = JSON.parse(authorizationUrl ?? '{ "error": null }');

  return result;
}
