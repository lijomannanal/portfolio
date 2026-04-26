"use client";

import SkillBlock from "@/components/SkillBlock";
import { useTyping } from "@/hooks/useTyping";

export default function Home() {
  const { value: typedText, loaded } = useTyping("Lijo Thomas", 150);
  return (
    <div className="w-full">
      <h3 className="text-xl font-bold mb-2">ABOUT ME</h3>
      <div className="flex gap-2">
        <h1 className="text-lg">Hello I'm</h1>
        <h1 className="text-lg font-bold text-primary">{typedText}</h1>
      </div>
      {loaded && (
        <div className="animate-fadeInUp">
          <p className="text-sm mb-2 leading-relaxed">
            a passionate and versatile Full Stack Developer with a strong
            enthusiasm for exploring and adopting modern technologies. My
            journey in web development has been both exciting and rewarding,
            driven by a constant desire to learn, grow, and stay aligned with
            emerging industry trends.{" "}
          </p>
          <p className="text-sm mb-2 leading-relaxed">
            Born and brought up in India, I completed my graduation in Computer
            Science and Engineering in 2014. Since August 2018, I’ve been living
            and working in Singapore, contributing to diverse and impactful
            projects across different domains.
          </p>
          <p className="text-sm mb-2 leading-relaxed">
            With over 11 years of professional experience, I specialize in
            crafting tailored software solutions for both internal platforms and
            external clients. My core expertise lies in web service API
            integration and the development of dynamic, scalable web-based
            applications, with a strong focus on performance, usability, and
            clean architecture.
          </p>
          <SkillBlock />
        </div>
      )}
    </div>
  );
}
