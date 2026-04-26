"use client";
import React, { useState } from "react";
import SocialIcon from "../SocialIcon";
import { Mail, MapPin, Phone, Download } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import Info from "../Info";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { listFiles } from "@/actions/drive";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/constants";

export default function ProfileCard() {
  const [isDownloading, setIsDownloading] = useState(false);
  const handleFileDownload = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setIsDownloading(true);
    const fileUrl = await listFiles();
    if (fileUrl) {
      const fileName = "Lijo_Thomas_Resume.pdf";
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    setIsDownloading(false);
  };
  return (
    <aside className="flex flex-col items-center text-center sticky top-20 left-10 w-full">
      <div
        className="h-[260px] 3xl:h-[330px]"
        style={{ position: "relative", width: "100%" }}
      >
        <Image src="/profile.png" alt="Profile" fill className="rounded-xl" />
      </div>

      <h2 className="mt-2 3xl:mt-4 text-2xl font-bold">Lijo Thomas</h2>

      <Badge className="mt-3 bg-primary text-primary-foreground">
        Full Stack Developer
      </Badge>
      <div className="mt-4 flex gap-3">
        {SOCIAL_LINKS.map((link) => (
          <SocialIcon
            key={link.name}
            icon={
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                <link.icon
                  size={24}
                  className="fill-blue-400 stroke-blue-400"
                />
              </Link>
            }
          />
        ))}
      </div>

      <div className="mx-auto mt-6 space-y-3 text-sm py-2 3xl:py-4 px-10 rounded-xl w-full">
        <div className="mx-auto">
          <Info icon={<Phone size={14} />} text="+65 83763765" />
          <Separator className="my-4" />
          <Info icon={<Mail size={14} />} text="lijothekkel@gmail.com" />
          <Separator className="my-4" />
          <Info icon={<MapPin size={14} />} text="Singapore" />
          <Separator className="my-4" />

          <Button
            onClick={handleFileDownload}
            size="sm"
            disabled={isDownloading}
          >
            {isDownloading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
                Downloading...
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </>
            )}
          </Button>
        </div>
      </div>
    </aside>
  );
}
