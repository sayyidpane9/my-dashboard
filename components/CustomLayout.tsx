"use client";
import CustomHeader from "./CustomHeader";
import CustomNavbar from "./CustomNavbar";
import CustomSidebarMenu from "./CustomSidebarMenu";
import Image from "next/image";
import { useState } from "react";

export default function CustomLayout(props: {
  children: React.ReactNode;
  isLogin: boolean;
}) {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="w-full h-full flex">
        <aside
          className={`bg-gray-700 transition ease-in-out delay-150  shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-dvh container-fluid ${
            open ? "w-[250px]" : "hidden"
          }  p-2  relative z-10`}
        >
          <div className="sidebar border-b gap-2 header h-[60px] flex justify-center items-center">
            <Image
              alt="logo.png"
              src={"/logo.png"}
              height={35}
              width={35}
            ></Image>
            <p className="text-sm font-bold text-white">TRY NEW WEBSITE</p>
          </div>
          <div className="menu w-full">
            <CustomSidebarMenu></CustomSidebarMenu>
          </div>
        </aside>
        <div className="content flex-1 h-dvh">
          {/* <CustomNavbar></CustomNavbar> */}
          <div className="overflow-scroll h-full">
            <CustomNavbar open={open} setOpen={setOpen}></CustomNavbar>
            <CustomHeader />
            <div className="content-wrapper container-fluid m-5">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
