import type { Metadata } from "next";
import SignupClient from "./SignupClient";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create a new FinTrack Pro account",
  robots: { index: false },
};

export default function Page() {
  return <SignupClient />;
}
