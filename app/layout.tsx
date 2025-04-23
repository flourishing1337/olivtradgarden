// app/layout.tsx

import "./globals.css";
import { ReactNode } from "react";
import { Providers } from "./providers";  // our Client wrapper

export const metadata = {
  title: "Olivträdgården",
  description: "Din butik för exklusiva olivträd",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
