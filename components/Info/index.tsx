import React from "react";
import { Separator } from "../ui/separator";

export default function Info({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex mx-auto items-center gap-3 3xl:w-[150px] w-[130px]">
      <span className="text-primary">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
