import React from "react";
import {
  SiAngular,
  SiAntdesign,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiGit,
  SiHibernate,
  SiHtml5,
  SiJavascript,
  SiJenkins,
  SiKubernetes,
  SiLaravel,
  SiMaterialdesign,
  SiMongodb,
  SiMysql,
  SiNginx,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiSpringboot,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import SkillList from "../SkillList";
import { TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import { BiLogoJava } from "react-icons/bi";
import { LiaAws } from "react-icons/lia";
import { FaAws } from "react-icons/fa";

export default function SkillBlock() {
  return (
    <>
      <h3 className="mt-6 text-xl font-bold mb-2">SKILLS</h3>
      <SkillList
        title="Frontend"
        skills={[
          { icon: <SiReact className="text-sky-400" />, name: "React" },
          { icon: <SiRedux className="text-purple-400" />, name: "Redux" },
          { icon: <SiAngular className="text-red-500" />, name: "Angular" },
          { icon: <SiHtml5 className="text-orange-500" />, name: "HTML" },
          { icon: <SiCss3 className="text-blue-500" />, name: "CSS" },
          {
            icon: <SiJavascript className="text-yellow-400" />,
            name: "JavaScript",
          },
          {
            icon: <SiTypescript className="text-blue-400" />,
            name: "TypeScript",
          },
          {
            icon: <SiBootstrap className="text-purple-500" />,
            name: "Bootstrap",
          },
          {
            icon: <SiTailwindcss className="text-sky-400" />,
            name: "Tailwind",
          },
          { icon: <SiShadcnui className="text-sky-400" />, name: "Shadcn UI" },
          {
            icon: <SiMaterialdesign className="text-blue-400" />,
            name: "Material Design",
          },
          {
            icon: <SiAntdesign className="text-red-400" />,
            name: "Ant Design",
          },
        ]}
      />

      <SkillList
        title="Backend"
        skills={[
          { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
          { icon: <SiExpress className="text-gray-300" />, name: "Express.js" },
          { icon: <BiLogoJava className="text-red-500" />, name: "Java" },
          {
            icon: <SiSpringboot className="text-green-600" />,
            name: "Spring Boot",
          },
          { icon: <SiHibernate className="text-red-500" />, name: "Hibernate" },
          { icon: <TbBrandCSharp className="text-purple-400" />, name: "C#" },
          { icon: <SiDotnet className="text-violet-400" />, name: ".NET" },
          { icon: <SiPython className="text-blue-300" />, name: "Python" },
          {
            icon: <DiMsqlServer className="text-red-500" />,
            name: "Entity Framework",
          },
          { icon: <SiFlask className="text-gray-200" />, name: "Flask" },
          { icon: <SiFastapi className="text-green-400" />, name: "FastAPI" },
          { icon: <SiPhp className="text-sky-600" />, name: "PHP" },
          { icon: <SiLaravel className="text-red-400" />, name: "Laravel" },
        ]}
      />
      <SkillList
        title="Database"
        skills={[
          { icon: <SiMysql className="text-sky-400" />, name: "MySQL" },
          { icon: <DiMsqlServer className="text-red-500" />, name: "MS SQL" },
          { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
          {
            icon: <SiPostgresql className="text-blue-400" />,
            name: "PostgreSQL",
          },
          { icon: <SiSqlite className="text-orange-400" />, name: "SQLite" },
        ]}
      />

      <SkillList
        title="Devops"
        skills={[
          { icon: <SiGit className="text-sky-400" />, name: "Git" },
          { icon: <SiDocker className="text-blue-500" />, name: "Docker" },
          {
            icon: <SiKubernetes className="text-blue-400" />,
            name: "Kubernetes",
          },
          { icon: <SiJenkins className="text-orange-500" />, name: "Jenkins" },
          { icon: <FaAws className="text-orange-400" />, name: "AWS" },
          { icon: <SiNginx className="text-blue-400" />, name: "Nginx" },
        ]}
      />
    </>
  );
}
