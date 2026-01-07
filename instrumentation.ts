import * as Sentry from "@sentry/nextjs";

export async function register() {
    if (process.env.NEXT_RUNTIME === "nodejs") {
        await import("./sentry.server.config");
    }

    // Temporarily disable edge runtime Sentry to avoid middleware conflicts
    // if (process.env.NEXT_RUNTIME === 'edge') {
    //   await import('./sentry.edge.config');
    // }
}

export const onRequestError = Sentry.captureRequestError;
