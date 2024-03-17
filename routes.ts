/**
 * An array of routes that are used for authentication.
 * These routes will redirect logged in users to /campement.
 * @type {string[]}
 */
export const authRoutes: string[] = [
  "/",
  "/enregistrement"
];

/**
 * The prefix for API authentication routes.
 * Routes that start with this prefix are used for API authentication purposes.
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * The default redirect path after logging in.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/serveur";
