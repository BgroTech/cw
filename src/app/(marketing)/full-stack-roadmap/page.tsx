import { Metadata } from "next";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import FullstackRoadmapClient from "./FullstackRoadmapClient";

export const metadata: Metadata = {
  title: "Full-Stack Development Roadmap - Master Frontend & Backend",
  description: "Complete full-stack learning path covering Next.js, Node.js, Express, PostgreSQL, MongoDB, authentication, and DevOps. Learn to build production-ready applications from database to UI with 8-10 years of expertise.",
  keywords: ["Full-stack roadmap", "MERN stack", "Learn fullstack", "Backend development", "Database design"],
  openGraph: {
    title: "Full-Stack Development Roadmap - Master Frontend & Backend",
    description: "Become a complete full-stack developer with this comprehensive learning roadmap.",
    type: "website",
  },
};

export default function FullstackRoadmapPage() {
  return (
    <>
      <SchemaMarkup type="Course" data={{
        name: "Full-Stack Development Roadmap",
        description: "Complete learning path to master full-stack development with Next.js, Node.js, and databases",
        provider: {
          "@type": "Organization",
          name: "Coding Wallah",
          sameAs: "https://codingwallah.in"
        },
        courseCode: "FULLSTACK-101-17TOPICS",
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
        numberOfModules: 17,
      }} />
      <FullstackRoadmapClient />
    </>
  );
}
