import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "henrilab.",
  description: "Software house focada em tecnologia e inovação",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
