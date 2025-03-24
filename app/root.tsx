import { MantineProvider } from "@/lib/mantine-provider";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import type { PropsWithChildren } from "react";
import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import type { Route } from "./+types/root";
import "@/styles";

export function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <ColorSchemeScript />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <MantineProvider>
      <Outlet />
    </MantineProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main
      style={{
        paddingTop: "4rem",
        maxWidth: "1000px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h1 style={{ textAlign: "center" }}>{message}</h1>
      <p style={{ textAlign: "center" }}>{details}</p>
      {stack && (
        <pre style={{ width: "100%", padding: "1rem", overflow: "auto" }}>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
