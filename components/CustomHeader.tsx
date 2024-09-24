"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { CustomBreadCumb } from "./CustomBreadCumb";
function CustomHeader() {
  const pathname = usePathname();
  const segment = pathname.split("/");
  const headName = segment[segment.length - 1].toUpperCase();

  return (
    <>
      <div className="flex  bg-white items-center justify-between  sm:flex-col sm:gap-2 md:flex-row p-4 shadow-sm">
        <h2 className="text-2xl font-bold tracking-tight">
          {headName.replaceAll("-", " ")}
        </h2>
        <div className="flex gap-2">
          <CustomBreadCumb></CustomBreadCumb>
        </div>
      </div>
    </>
  );
}

export default CustomHeader;
