import { Metadata } from "next";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import NextjsRoadmapClient from "./NextjsRoadmapClient";

export const metadata: Metadata = {
  title: "Next.js Mastery Roadmap - Learn Modern Frontend Development",
  description: "Master Next.js 15, React.js, and modern web development. Complete learning path from HTML/CSS to advanced Next.js patterns. Build SEO-ready websites with 8-10 years of industry experience.",
  keywords: ["Next.js roadmap", "Learn Next.js", "React tutorial", "Frontend development", "Next.js 15"],
  openGraph: {
    title: "Next.js Mastery Roadmap - Learn Modern Frontend Development",
    description: "Master Next.js 15 and React.js with step-by-step guidance from experienced developers.",
    type: "website",
  },
};

export default function NextjsRoadmapPage() {
  return (
    <>
      <SchemaMarkup type="Course" data={{
        name: "Next.js Mastery Roadmap",
        description: "Complete learning path to master Next.js 15, React.js, and modern frontend development",
        provider: {
          "@type": "Organization",
          name: "Coding Wallah",
          sameAs: "https://codingwallah.in"
        },
        courseCode: "NEXTJS-101-15TOPICS",
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
      <NextjsRoadmapClient />
    </>
  );
}
