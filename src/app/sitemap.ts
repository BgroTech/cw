import { SITE_CONFIG } from "@/lib/metadata/config";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SITE_CONFIG.url;

    // Manual routes
    const routes = ["", "/about", "/blog", "/roadmaps", "/faq", "/contact", "/privacy", "/terms"].map(
        (route) => ({
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: route === "" ? 1 : 0.8,
        })
    );

    // Special learning paths
    const learningPaths = [
        "/java-developer-roadmap",
        "/nextjs-mastery-roadmap",
        "/full-stack-roadmap",
        "/seo-for-developers-roadmap"
    ].map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.75,
    }));

    // In a real app, you would fetch all blog slugs and add them here
    const blogPosts = [
        "build-portfolio-nextjs",
        "seo-for-developers",
        "typescript-basics-hindi",
    ].map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    return [...routes, ...learningPaths, ...blogPosts];
}
