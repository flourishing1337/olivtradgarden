// app/layout.tsx
"use client";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_SALEOR_API_URL,
  cache: new InMemoryCache(),
  headers: {
    // if you need auth:
    ...(process.env.NEXT_PUBLIC_SALEOR_TOKEN && {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_SALEOR_TOKEN}`,
    }),
  },
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
      <body>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </body>
    </html>
  );
}
