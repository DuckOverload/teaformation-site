import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {};

export default function RootLayout({}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased`}
      >
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
          <h1>Teste!</h1>
        </div>
      </body>
    </html>
  );
}
