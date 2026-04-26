import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import { Github, Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function ProjectCard({
  image,
  title,
  description,
  tags,
  url,
  githubLink,
}: {
  image: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
  githubLink: string;
}) {
  return (
    <Card className="overflow-hidden rounded-xl gap-0 px-6 py-8 shadow transition duration-300 ease-in-out hover:scale-102">
      <div className="relative h-40 bg-slate-100 mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover drop-shadow-2xl"
        />
      </div>

      <CardContent className="px-0 h-[180px]">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-200 px-3 py-1 text-sm text-[#4e5963]"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-md mt-5 leading-relaxed opacity-90">{description}</p>
      </CardContent>
      <CardFooter className="py-5 flex gap-3">
        <Link href={url} target="_blank" rel="noopener noreferrer">
          <Button>
            <Globe className="mr-2 h-4 w-4" />
            Visit
          </Button>
        </Link>
        <Link href={githubLink} target="_blank" rel="noopener noreferrer">
          <Button variant="outline">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
