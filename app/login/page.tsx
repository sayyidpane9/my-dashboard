
import React from "react";
import LoginForm from "./form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

async function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <Image alt="logo" src={"/logo.png"} width={150} height={150}></Image>
      <h1 className="font-bold text-2xl m-4">LOGIN DULU YAH</h1>
      <Card className="w-[400px] shadow-md rounded-none">
        <CardHeader>
          <p className="text-center">Sign in First</p>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginPage;
