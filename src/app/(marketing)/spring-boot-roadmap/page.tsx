import { Metadata } from "next";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import SpringBootRoadmapClient from "./SpringBootRoadmapClient";

export const metadata: Metadata = {
  title: "Spring Boot Mastery Roadmap - Learn Modern Backend Development",
  description: "Master Spring Boot and modern backend development. Complete learning path from core concepts to advanced topics. Build production-ready applications with 8-10 years of industry experience.",
  keywords: ["Spring Boot roadmap", "Learn Spring Boot", "Backend development", "Spring Boot tutorial"],
  openGraph: {
    title: "Spring Boot Mastery Roadmap - Learn Modern Backend Development",
    description: "Master Spring Boot and modern backend development with step-by-step guidance from experienced developers.",
    type: "website",
  },
};

export default function SpringBootRoadmapPage() {
  return (
    <>
      <SchemaMarkup type="Course" data={{
        name: "Spring Boot Mastery Roadmap",
        description: "Complete learning path to master Spring Boot and modern backend development",
        provider: {
          "@type": "Organization",
          name: "Coding Wallah",
          sameAs: "https://codingwallah.in"
        },
        courseCode: "SPRINGBOOT-101-15TOPICS",
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "Self-paced",
          instructor: {
            "@type": "Person",
            name: "Coding Wallah",
            description: "Expert instructor with 8-10 years of industry experience"
          }
        },
        educationalLevel: "Beginner to Advanced",
        numberOfModules: 15,
      }} />
      <SpringBootRoadmapClient />
    </>
  );
}
