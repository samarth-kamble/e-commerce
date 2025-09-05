import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";
import { TRPCReactProvider } from "@/trpc/client";
import { Toaster } from "sonner";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luxora - Luxury Marketplace",
  description: "Luxora - Your one-stop shop for all things luxury.",
  icons: {
    icon: "../../../public/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}>
        <TRPCReactProvider>
          {children}
          <Toaster richColors position="bottom-left" />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
