import type { Metadata } from "next";
import DashboardClient from "./DashboardClient";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "View your financial overview, income, expenses, and transaction history",
};

export default function Page() {
  return <DashboardClient />;
}
