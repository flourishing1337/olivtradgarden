// app/providers.tsx
"use client";

import { ReactNode } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_SALEOR_API_URL,
  cache: new InMemoryCache(),
  headers: {
    ...(process.env.NEXT_PUBLIC_SALEOR_TOKEN && {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_SALEOR_TOKEN}`,
    }),
  },
});

export function Providers({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
