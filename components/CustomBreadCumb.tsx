"use client";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import React from "react";

export function CustomBreadCumb() {
  const pathname = usePathname();

  const bread = pathname.split("/");
  const totalBread = bread.length;
  return (
    <div className="border p-3 flex justify-between items-center rounded-none bg-gray-100">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          {bread.map((e, index) => {
            return e !== "dashboard" ? (
              <React.Fragment key={index}>
                {index === totalBread - 1 ? (
                  <BreadcrumbItem className=" font-bold">
                    <BreadcrumbLink>{e}</BreadcrumbLink>
                  </BreadcrumbItem>
                ) : (
                  <BreadcrumbItem>
                    <BreadcrumbLink href={"/" + e}>{e}</BreadcrumbLink>
                  </BreadcrumbItem>
                )}

                <BreadcrumbSeparator />
              </React.Fragment>
            ) : null;
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
