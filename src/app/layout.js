import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./globals.css";

export const metadata = {
  title: "henrilab.",
  description: "Software house for the new digital market",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ToastContainer/>
      <body>{children}</body>
    </html>
  );
}
