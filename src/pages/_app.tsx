import "../styles/globals.css";
import { Oswald } from "@next/font/google";

const rubik = Oswald({
  subsets: ["latin"],
  variable: "--font-sans",
});

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${rubik.variable} font-sans h-full`}>
      <Component {...pageProps} />
    </div>
  );
}
