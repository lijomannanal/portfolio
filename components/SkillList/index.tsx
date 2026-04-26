import React from "react";
import { Card, CardContent } from "../ui/card";

export default function SkillList({
  title,
  skills,
}: {
  title: string;
  skills: { icon: React.ReactNode; name: string }[];
}) {
  return (
    <div className="mb-6">
      <h3 className="mb-8 text-lg font-medium">{title}</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {skills.map((skill) => (
          <Card key={skill.name} className="shadow-none border">
            <CardContent className="flex flex-col items-center gap-3">
              <div className="text-5xl">{skill.icon}</div>
              <span className="text-sm">{skill.name}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
