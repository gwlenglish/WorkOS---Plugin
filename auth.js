import { WorkOS } from "@workos-inc/node";
require("dotenv").config();
// This example uses Next.js with React Server Components.
// Because this page is an RSC, the code stays on the server, which allows
// us to use the WorkOS Node SDK without exposing our API key to the client.
//
// If your application is a single page app (SPA), you will need to:
// - create a form that can POST to an endpoint in your backend
// - call the `getAuthorizationURL` method in that endpoint
// - redirect the user to the returned URL

const workos = new WorkOS(process.env.WORKOS_API_KEY);

async function getAuthorizationURL(connection) {
  const authorizationUrl = workos.sso.getAuthorizationUrl({
    connection: connection,
    clientId: process.env.WORKOS_CLIENT_ID,
    redirectUri: process.env.WORKOS_REDIRECT_URI,
    //state: "dj1kUXc0dzlXZ1hjUQ==",
  });
  const result = JSON.parse(authorizationUrl ?? '{ "error": null }');

  return result;
}
