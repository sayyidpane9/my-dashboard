import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";
import { Metadata } from "next";
import CustomLayout from "@/components/CustomLayout";
import { getSession } from "@/lib/lib";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Try New Website",
  description: "Lorem Ipsum",
  icons: "/logo.png",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  if (session.admin == false) redirect("/quiz");
  if (session.isLoggedIn == false) redirect("/login");

  return (
    <html>
      <body>
    <div className="bg-slate-100">
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        disableTransitionOnChange
      >
        <Toaster />
        <NextTopLoader showSpinner={false} />
        <CustomLayout isLogin={session.isLoggedIn}>{children}</CustomLayout>
      </ThemeProvider>
    </div>
    </body>
    </html>
  );
}
