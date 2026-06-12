import type { Metadata } from "next";
import { HomePageView } from "@/components/HomePageView";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <HomePageView />;
}