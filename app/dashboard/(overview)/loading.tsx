import React from "react";
import DashboardSkeleton from "@/app/ui/skeletons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loading | Acme Dashboard",
};
const Loading = () => {
  return <DashboardSkeleton />;
};

export default Loading;
