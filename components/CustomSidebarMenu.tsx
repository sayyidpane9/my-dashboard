import React from "react";

import { usePathname, useRouter } from "next/navigation";
import {
  ArchiveIcon,
  CountdownTimerIcon,
  DashboardIcon,
  EnvelopeClosedIcon,
  GearIcon,
  MixIcon,
  Pencil2Icon,
  PersonIcon,
  QuestionMarkIcon,
  TransformIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

interface MenuInterface {   
  name: string;
  key: string;
  href: string;
  icon: any;
}

const CustomSidebarMenu = () => {
  let menus: MenuInterface[] = [
    {
      name: "Dashboard",
      key: "dashboard",
      href: "/dashboard",
      icon: <DashboardIcon></DashboardIcon>,
    },
    {
      name: "Site",
      key: "site",
      href: "/site",
      icon: <TransformIcon></TransformIcon>,
    },
    {
      name: "Employee",
      key: "employee",
      href: "/employee",
      icon: <PersonIcon></PersonIcon>,
    },
    {
      name: "Survey",
      key: "survey",
      href: "/survey",
      icon: <Pencil2Icon></Pencil2Icon>,
    },
    {
      name: "Quiz",
      key: "quiz",
      href: "/quiz",
      icon: <CountdownTimerIcon></CountdownTimerIcon>,
    },
    {
      name: "Mail History",
      key: "mail-history",
      href: "/mail-history",
      icon: <EnvelopeClosedIcon></EnvelopeClosedIcon>,
    },
    // {
    //   name: "Question",
    //   key: "Question",
    //   href: "/question",
    //   icon: <QuestionMarkIcon></QuestionMarkIcon>,
    // },
  ];
  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1];

  const router = useRouter();
  return (
    <div className="m-1">
      <p className="font-bold text-white pt-3">Menu</p>
      <div className="mt-3">
        {menus.map((menu) => (
          <Link
            key={menu.key}
            href={menu.href}
            className="text-left  text-slate-200 font-bold  flex items-center gap-3 hover:bg-gray-500 py-2 px-3"
          >
            {menu.icon}
            {menu.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CustomSidebarMenu;
