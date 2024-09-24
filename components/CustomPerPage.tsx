"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

function CustomPerPage() {
  const [value, setValue] = useState("10");
  const show = ["5", "10", "15"];
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("per_page", term);
    } else {
      params.delete("per_page");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  useEffect(() => {
    setValue(searchParams.get("per_page")?.toString() ?? "10");
  }, []);
  return (
    <div className="flex gap-3 items-center">
      <p>Show</p>
      <Select
        defaultValue={value}
        onValueChange={(value) => {
          setValue(value);
          handleSearch(value);
        }}
      >
        <SelectTrigger className="w-[60px] h-[40px]">
          <SelectValue
            defaultValue={searchParams.get("per_page") ?? 10}
            placeholder={searchParams.get("per_page")?.toString() ?? "10"}
          />
        </SelectTrigger>
        <SelectContent>
          {show.map((e) => (
            <SelectItem key={e} value={e.toString()}>
              {e}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p>Entries</p>
    </div>
  );
}

export default CustomPerPage;
