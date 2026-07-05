import type { Metadata } from "next";
import SettingsClient from "./SettingsClient";

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage your profile details and currency preferences",
};

export default function Page() {
  return <SettingsClient />;
}
