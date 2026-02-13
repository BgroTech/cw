import { Metadata } from "next";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import SeoRoadmapClient from "./SeoRoadmapClient";

export const metadata: Metadata = {
  title: "SEO for Developers Roadmap - Master Search Engine Optimization",
  description: "Complete SEO learning path for web developers. Learn Core Web Vitals, schema markup, technical SEO, on-page optimization, and how to rank on Google with 8-10 years of proven strategies.",
  keywords: ["SEO roadmap", "Learn SEO", "Technical SEO", "Google ranking", "SEO for developers"],
  openGraph: {
    title: "SEO for Developers Roadmap - Master Search Engine Optimization",
    description: "Learn how to make your web applications rank on Google with professional SEO strategies.",
    type: "website",
  },
};

export default function SeoRoadmapPage() {
  return (
    <>
      <SchemaMarkup type="Course" data={{
        name: "SEO for Developers Roadmap",
        description: "Complete learning path to master SEO and make your applications rank higher on Google",
        provider: {
          "@type": "Organization",
          name: "Coding Wallah",
          sameAs: "https://codingwallah.in"
        },
        courseCode: "SEO-101-16TOPICS",
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "Self-paced",
          instructor: {
            "@type": "Person",
            name: "Coding Wallah",
            description: "Expert instructor with 8-10 years of industry experience in SEO and web development"
          }
        },
        educationalLevel: "Beginner to Advanced",
        numberOfModules: 16,
      }} />
      <SeoRoadmapClient />
    </>
  );
}
