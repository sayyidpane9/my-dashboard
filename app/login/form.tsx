"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { setCookie } from "nookies";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const url = "https://w3dkbr6s-3000.asse.devtunnels.ms/";

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Reset error state
    setError("");
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      const resp = await axios.post(url, formData);
      console.log(resp);

      // Simulasi validasi login
      if (email === "admin@gmail.com" && password === "admin") {
        // Simpan token di cookies
        setCookie(null, "token", "dummyToken", {
          maxAge: 30 * 24 * 60 * 60, // 30 hari
          path: "/",
        });

        // Redirect ke halaman dashboard
        router.push("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="email" className="block text-sm font-bold mb-2">
          Email:
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full"
        />
      </div>

      <div>
        <Label htmlFor="password" className="block text-sm font-bold mb-2">
          Password:
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="text-center">
        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
