'use client';

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"; // Avatar component
import { useRouter } from "next/navigation";
import Image from "next/image"; // for logo

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        {/* Header Section */}
      <header className="flex justify-between items-center w-full max-w-4xl mb-8 px-4">
        {/* Logo and App Name */}
        <div className="flex items-center space-x-4">
          <Image alt="logo" src="/logo.png" width={40} height={40} />
          <h1 className="text-3xl font-bold">Try New Website</h1>
        </div>

        {/* User Avatar and Logout Button */}
        
      </header>

      {/* Search Bar */}
      <div className="mb-6 w-full flex justify-center">
        <Card className="w-[860px] shadow-md">
          <CardHeader>
            <h2 className="text-lg font-bold text-center">Cari Pengguna</h2>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-8">
              <Input placeholder="Masukkan nama pengguna..." />
              <Button>Cari</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content: Three Sections */}
      <main className="grid grid-cols-1 gap-6 w-full max-w-4xl px-4">
        {/* Section 1: Statistik */}
        <Card className="shadow-md">
          <CardHeader>
            <h2 className="text-lg font-bold">Statistik Pengguna</h2>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between">
                <p>Total Pengguna</p>
                <p className="font-bold">1,204</p>
              </div>
              <div className="flex justify-between">
                <p>Pengguna Aktif</p>
                <p className="font-bold">894</p>
              </div>
              <div className="flex justify-between">
                <p>Pendaftaran Baru</p>
                <p className="font-bold">34</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Quick Actions */}
        <Card className="shadow-md">
          <CardHeader>
            <h2 className="text-lg font-bold">Quick Actions</h2>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <Button variant="secondary">Tambah Pengguna Baru</Button>
              <Button variant="secondary">Lihat Laporan Bulanan</Button>
              <Button variant="secondary">Kelola Pengguna</Button>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Statistik Tambahan
        <Card className="shadow-md">
          <CardHeader>
            <h2 className="text-lg font-bold">Statistik Tambahan</h2>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between">
                <p>Transaksi Selesai</p>
                <p className="font-bold">783</p>
              </div>
              <div className="flex justify-between">
                <p>Pembayaran Pending</p>
                <p className="font-bold">17</p>
              </div>
              <div className="flex justify-between">
                <p>Permintaan Refund</p>
                <p className="font-bold">5</p>
              </div>
            </div>
          </CardContent>
        </Card> */}
      </main>
    </div>
  );
};

export default DashboardPage;
