"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import DataTable from "./table"; // Adjust the import based on your folder structure

const sites = [
  { id: 1, site: "Main Office", employeeTotal: 120 },
  { id: 2, site: "Branch Office", employeeTotal: 80 },
  { id: 3, site: "Lawless Office", employeeTotal: 100 },
  { id: 4, site: "Infinity Office", employeeTotal: 40 },
  { id: 5, site: "Jawell Office", employeeTotal: 20 },
  { id: 6, site: "Keyless Office", employeeTotal: 50 },
  { id: 7, site: "Frawless Office", employeeTotal: 200 },
  { id: 8, site: "Daxia Office", employeeTotal: 500 },
  { id: 9, site: "Cascade Office", employeeTotal: 404 },
  { id: 10, site: "Alter Office", employeeTotal: 320 },
  { id: 11, site: "Grendeng Office", employeeTotal: 499 },
  { id: 12, site: "Purwokerto Office", employeeTotal: 600 },
];

const SitePage: React.FC = () => {
  const [entries, setEntries] = useState<number>(10);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleEntriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEntries(Number(e.target.value));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex flex-col flex-grow min-h-screen">
      {/* Main Content */}
      <div className="flex-grow p-4">
        <Card className="w-full shadow-md">
          <CardHeader>
            <div className="flex justify-between items-center">
              {/* Entries Dropdown on the left */}
              <div className="flex items-center space-x-2">
                <label htmlFor="entries" className="font-medium">Show</label>
                <select
                  id="entries"
                  className="border p-1"
                  value={entries}
                  onChange={handleEntriesChange}
                >
                  <option value={1}>1</option>
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
                <span>Entries</span>
              </div>

              {/* Search bar on the right */}
              <Input 
                type="search" 
                placeholder="Search..." 
                className="max-w-sm" 
                value={searchTerm} 
                onChange={handleSearchChange} 
              />
            </div>
          </CardHeader>
          <CardContent>
            <DataTable entries={entries} searchTerm={searchTerm} sites={sites} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SitePage;
