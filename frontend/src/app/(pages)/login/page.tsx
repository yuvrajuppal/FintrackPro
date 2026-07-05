import type { Metadata } from "next";
import LoginClient from "./LoginClient";

export const metadata: Metadata = {
  title: "Log In",
  description: "Log in to your FinTrack Pro account",
  robots: { index: false },
};

export default function Page() {
  return <LoginClient />;
}
