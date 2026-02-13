import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import BlogCard from "@/components/ui/BlogCard";
import { Metadata } from "next";
import { calculateReadingTime } from "@/lib/readingTime";

export const metadata: Metadata = {
    title: "Blog & Tutorials",
    description: "Explore our latest web development and SEO tutorials. Simple, practical, and beginner-friendly.",
};

const blogs = [
    {
        title: "How to Build a Portfolio with Next.js",
        description: "Learn how to create a fast, SEO-ready portfolio website using Next.js 15 and App Router.",
        slug: "build-portfolio-nextjs",
        date: "Jan 15, 2026",
        content: "This comprehensive guide walks you through building a modern portfolio website using Next.js 15. Learn about App Router, Server Components, metadata optimization, and deployment. We'll cover best practices for performance and SEO that will help your portfolio rank high on Google. Step by step, we'll create a production-ready site that showcases your skills to potential employers and clients.",
    },
    {
        title: "Understanding SEO for Developers",
        description: "Crucial SEO tips for web developers that will help your projects rank on Google.",
        slug: "seo-for-developers",
        date: "Jan 10, 2026",
        content: "SEO isn't just for marketers. As a developer, understanding search engine optimization is crucial. This guide covers technical SEO, Core Web Vitals, structured data, and how to optimize your websites for Google. Learn about metadata, open graph tags, schema markup, internal linking strategies, and mobile-first indexing. With these skills, you'll build websites that don't just work well, but get found by users.",
    },
    {
        title: "TypeScript Basics for Hindi Students",
        description: "TypeScript seekhein bilkul aasaan bhasha mein. Types, Interfaces aur Classes explained.",
        slug: "typescript-basics-hindi",
        date: "Jan 05, 2026",
        content: "TypeScript ko samjhna muskil lagta hai? Na, bilkul nahi! Isko aasan banate hain. Types kya hote hain, Interfaces kaise use hote hain, Classes aur Generics ki basics. Real-world examples ke saath samjhte hain. Practice exercises karenage taaki TypeScript aapka second nature ban jaye. Hinglish main puri explanation with code examples.",
    },
].map(blog => ({
    ...blog,
    readingTime: calculateReadingTime(blog.content),
}));

export default function BlogListPage() {
    return (
        <>
            <Header />
            <main className="py-20">
                <Container>
                    <div className="mb-12">
                        <h1 className="text-4xl font-bold mb-4">Latest Tutorials</h1>
                        <p className="text-muted-foreground text-lg">
                            Practical guides to help you master modern web development.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog) => (
                            <BlogCard key={blog.slug} {...blog} />
                        ))}
                    </div>
                </Container>
            </main>
            <Footer />
        </>
    );
}
