import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import Breadcrumb from "@/components/seo/Breadcrumb";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { calculateReadingTime } from "@/lib/readingTime";

interface BlogPostProps {
    params: Promise<{ slug: string }>;
}

// Mock data fetching
async function getBlogPost(slug: string) {
    const posts: Record<string, any> = {
        "build-portfolio-nextjs": {
            title: "How to Build a Portfolio with Next.js",
            description: "Learn how to create a fast, SEO-ready portfolio website using Next.js 15 and App Router.",
            date: "2026-01-15",
            content: "This is a detailed tutorial on building a portfolio...",
        },
    };
    return posts[slug] || null;
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getBlogPost(slug);

    if (!post) return { title: "Post Not Found" };

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            publishedTime: post.date,
        },
    };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
    const { slug } = await params;
    const post = await getBlogPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <SchemaMarkup type="Article" data={{
                headline: post.title,
                datePublished: post.date,
                author: { "@type": "Person", name: "Coding Wallah" },
                description: post.description,
            }} />

            <Header />

            <main className="py-20">
                <Container className="max-w-4xl">
                    {/* Breadcrumb Navigation */}
                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "Blog", href: "/blog" },
                        { label: post.title }
                    ]} />

                    <article>
                        <header className="mb-12">
                            <div className="flex items-center gap-4 mb-2 flex-wrap">
                                <p className="text-primary font-bold text-sm uppercase">{post.date}</p>
                                <span className="text-muted-foreground">•</span>
                                <p className="text-muted-foreground font-bold text-sm uppercase">{calculateReadingTime(post.content)} min read</p>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                                {post.title}
                            </h1>
                            <p className="text-xl text-muted-foreground italic">
                                {post.description}
                            </p>
                        </header>

                        <div className="prose mb-12">
                            <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
                            <p className="mb-4">
                                Pehle aapko basic HTML aur CSS aani chahiye. Next.js ke liye JavaScript ke ES6+ concepts clear hone chahiye.
                            </p>

                            <h2 className="text-2xl font-bold mb-4">Step 1: Install Next.js</h2>
                            <p className="mb-4">Apne terminal mein yeh command run karein:</p>
                            <pre>
                                <code>npx create-next-app@latest my-portfolio</code>
                            </pre>

                            <h2 className="text-2xl font-bold mb-4">Step 2: Folders Manage Karein</h2>
                            <p className="mb-4">
                                Students अक्सर confuse hote hain ki file kahan rakhein. App Router mein `src/app` hi aapki dunniya hai.
                            </p>

                            <blockquote className="border-l-4 border-primary pl-4 italic my-6 bg-muted p-4">
                                "Code likhna ek kala hai, aur architecture uski buniad." - Coding Wallah
                            </blockquote>

                            <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
                            <p className="mb-4">
                                Portfolio banana sirf code likhna nahi, balki apni skills ko represent karna hai.
                            </p>
                        </div>

                        {/* Internal Linking */}
                        <div className="bg-muted p-6 rounded-lg mb-12">
                            <h3 className="font-bold mb-2">Related Articles</h3>
                            <ul className="list-disc list-inside text-primary">
                                <li><a href="/blog/seo-for-developers">SEO Tips every Dev should know</a></li>
                                <li><a href="/blog/typescript-basics-hindi">Typescript Basics in Hindi</a></li>
                            </ul>
                        </div>

                        {/* FAQ at bottom */}
                        <hr className="my-12" />
                        <h2 className="text-3xl font-bold mb-6">FAQ specifically for this Tutorial</h2>
                        <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="font-bold">Can I use this for production?</h4>
                                <p className="text-muted">Yes, we are using production-ready best practices here.</p>
                            </div>
                        </div>
                    </article>
                </Container>
            </main>

            <Footer />
        </>
    );
}
