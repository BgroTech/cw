import { Metadata } from "next";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import RoadmapClient from "./RoadmapClient";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Java Developer Roadmap - Complete Learning Path (DSA, Coding Profiles, Real Projects)",
  description: "Master Java development from basics to advanced. Learn Core Java, DSA, Spring Boot, Coding Profiles, Real-Life Projects, and more. Interactive roadmap with 18+ steps for freshers and experienced candidates.",
  keywords: [
    "Java roadmap", "Learn Java", "Spring Boot tutorial", "Java developer path", "Java learning guide", "DSA", "Coding Profiles", "Tier 3 visibility", "Real-life project"
  ],
  openGraph: {
    title: "Java Developer Roadmap - Complete Learning Path (DSA, Coding Profiles, Real Projects)",
    description: "Master Java development from basics to advanced. Learn Core Java, DSA, Spring Boot, Coding Profiles, Real-Life Projects, and more.",
    type: "website",
  },
};

export default function JavaRoadmapPage() {
  return (
    <>
      <SchemaMarkup type="Course" data={{
        name: "Java Developer Roadmap",
        description: "Complete learning path to become a professional Java developer. Includes DSA, Coding Profiles, Tier 3 visibility, and Real-Life Projects.",
        provider: {
          "@type": "Organization",
          name: "Coding Wallah",
          sameAs: "https://codingwallah.in"
        },
        courseCode: "JAVA-101-18TOPICS",
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
        numberOfModules: 18,
        url: "https://codingwallah.in/java-developer-roadmap",
        video: [
          "https://youtu.be/fMMz9UUjFY8?si=OfosSzaO8lz6uHfI",
          "https://youtube.com/@codingwallahsir"
        ],
      }} />
     
      <RoadmapClient />
      <h1 className="text-3xl font-bold text-center mt-8">Java Developer Roadmap by <Link href="https://codingwallah.in" className="text-primary hover:underline">Coding Wallah</Link></h1>

      <p className="text-center text-muted-foreground mt-2 mb-10 max-w-2xl mx-auto">
        Follow this comprehensive roadmap to master Java development. From core concepts to real-life projects, this guide covers everything you need to become a successful Java developer.
      </p>

    </>
  );
}
