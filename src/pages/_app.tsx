import "../styles/globals.css";
import { Rubik } from "@next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${rubik.variable} font-sans h-full`}>
      <Component {...pageProps} />
    </div>
  );
}
