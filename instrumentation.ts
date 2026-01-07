// Temporarily disabled to fix Vercel edge runtime middleware issues
// Uncomment this file once the middleware is working

// import * as Sentry from "@sentry/nextjs";

// export async function register() {
//     if (process.env.NEXT_RUNTIME === "nodejs") {
//         await import("./sentry.server.config");
//     }
// }

// export const onRequestError = Sentry.captureRequestError;
