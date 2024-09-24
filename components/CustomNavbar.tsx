"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { LogOutIcon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { destroyCookie } from "nookies";

interface MenuInterface {
  name: string;
  key: string;
  href: string;
}

const handleLogout = () => {
    destroyCookie(null, "token");
    const router = useRouter();
    router.push("/login");
  };

function CustomNavbar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  let menus: MenuInterface[] = [
    {
      name: "Dashboard",
      key: "dashboard",
      href: "/dashboard",
    },
    {
      name: "Employee",
      key: "employee",
      href: "/employee",
    },
    {
      name: "Division",
      key: "division",
      href: "/division",
    },
    {
      name: "Survey",
      key: "survey",
      href: "/survey",
    },
    {
      name: "Session",
      key: "session",
      href: "/session",
    },
    {
      name: "Profile",
      key: "profile",
      href: "/profile",
    },
  ];
  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1];
  return (
    <>
      <div className="nav border-b p-3 flex justify-between items-center bg-white sticky top-0">
        <div className="font-bold">
          <HamburgerMenuIcon
            onClick={() => {
              if (open) {
                setOpen(false);
              } else [setOpen(true)];
            }}
            width={20}
            height={20}
            className="text-2xl font-bold cursor-pointer"
          ></HamburgerMenuIcon>
        </div>

        <div className="flex items-center space-x-4">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_7.png" />
            <AvatarFallback>Avatar</AvatarFallback> {/* Initials as fallback */}
          </Avatar>
          <p className="text-lg font-medium">Admin</p>
          <Button onClick={handleLogout} variant="destructive">
            Logout
          </Button>
        </div>
        
        {/* <CustomLogoutButtom></CustomLogoutButtom> */}
        {/* <NavigationMenu className="border p-3 rounded-lg">
        <NavigationMenuList>
          {menus.map((menu) => (
            <NavigationMenuItem key={menu.key}>
              <Link href={menu.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${
                    "/" + firstSegment === menu.href
                      ? "dark:bg-blue-500 dark:text-white bg-primary text-primary-foreground"
                      : "hover:border-b-2 hover:bg-slate-400 "
                  } ${navigationMenuTriggerStyle()}`}
                >
                  {menu.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu> */}

        {/* <CustomThemeSwithcer></CustomThemeSwithcer> */}
      </div>
    </>
  );
}

export default CustomNavbar;
