import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import Button from "@/components/ui/Button";

export const metadata = {
    title: "About Coding Wallah - 8-10 Years of Expertise",
    description: "Learn about Coding Wallah's mission to teach Full-Stack Development, SEO, and Modern Tech. 1L+ YouTube subscribers, 500+ paid students.",
};

export default function AboutPage() {
    return (
        <>
            <SchemaMarkup type="Organization" data={{
                name: "Coding Wallah",
                description: "Learn Full-Stack Development and SEO with 8-10 years of industry expertise",
                url: "https://codingwallah.in",
                areaServed: "India"
            }} />

            <Header />
            <main>
                {/* HERO SECTION */}
                <section className="pt-32 pb-20 text-center">
                    <Container>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                            About <span className="text-primary">Coding Wallah</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            Coding ko accessible banana Indian students ke liye. Real expertise. Real teaching. Real results.
                        </p>
                    </Container>
                </section>

                {/* MISSION SECTION */}
                <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
                    <Container>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                    India mein bohot saare students hain jo developer banna chahte hain, par resources aksar over-complicated hote hain. Language barriers, expensive courses, aur impractical education - yeh sab problems hain.
                                </p>
                                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                    Coding Wallah sirf coding nahi sikhata - hum "Sahi Tareeka" sikhate hain. Hinglish mein, practical projects ke saath, aur industry-ready skills.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary font-bold text-xl mt-1">✓</span>
                                        <div>
                                            <p className="font-bold">Simple Hinglish Teaching</p>
                                            <p className="text-sm text-muted-foreground">Language barrier ko eliminate karte hain</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary font-bold text-xl mt-1">✓</span>
                                        <div>
                                            <p className="font-bold">Practical Projects</p>
                                            <p className="text-sm text-muted-foreground">Real-world problems, real solutions</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary font-bold text-xl mt-1">✓</span>
                                        <div>
                                            <p className="font-bold">SEO + Development</p>
                                            <p className="text-sm text-muted-foreground">Build projects that rank on Google</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-primary/30">
                                <h3 className="text-2xl font-bold mb-6">What Sets Us Apart?</h3>
                                <div className="space-y-4">
                                    <div className="mb-6 p-4 bg-muted rounded-lg border">
                                        <p className="font-bold text-primary mb-1">🎯 Practical Learning</p>
                                        <p className="text-sm text-muted-foreground">100% industry-relevant curriculum</p>
                                    </div>
                                    <div className="mb-6 p-4 bg-muted rounded-lg border">
                                        <p className="font-bold text-primary mb-1">🌎 Indian-First Content</p>
                                        <p className="text-sm text-muted-foreground">Hinglish tutorials by Indian developers</p>
                                    </div>
                                    <div className="p-4 bg-muted rounded-lg border">
                                        <p className="font-bold text-primary mb-1">💯 Completely Free</p>
                                        <p className="text-sm text-muted-foreground">Core content accessible to everyone</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* FOUNDER / EXPERIENCE SECTION */}
                {/* <section className="py-20">
                    <Container>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">Who's Behind Coding Wallah?</h2>
                            <p className="text-lg text-muted-foreground">8-10 years of real-world experience, now teaching you</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="card p-8 text-center border-t-4 border-t-primary">
                                <p className="text-5xl font-bold text-primary mb-2">8-10</p>
                                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Years of Experience</p>
                                <p className="text-muted-foreground">Building production-ready applications at scale</p>
                            </div>

                            <div className="card p-8 text-center border-t-4 border-t-primary">
                                <p className="text-5xl font-bold text-primary mb-2">5+</p>
                                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Live Projects</p>
                                <p className="text-muted-foreground">Real-world applications used by thousands</p>
                            </div>

                            <div className="card p-8 text-center border-t-4 border-t-primary">
                                <p className="text-5xl font-bold text-primary mb-2">120+</p>
                                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Tutorials Created</p>
                                <p className="text-muted-foreground">Comprehensive guides on modern tech</p>
                            </div>
                        </div>

                        <div className="mt-12 card p-8 md:p-12 bg-gradient-to-r from-primary/5 to-accent/5 border-l-4 border-l-primary">
                            <h3 className="text-2xl font-bold mb-6">Core Expertise</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div>
                                    <p className="font-bold text-lg mb-3 flex items-center gap-2">
                                        <span className="text-2xl">🚀</span> Full-Stack Development
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>✓ Frontend: React, Next.js</li>
                                        <li>✓ Backend: Node.js, Databases</li>
                                        <li>✓ DevOps & Deployment</li>
                                        <li>✓ Scalable Architecture</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-bold text-lg mb-3 flex items-center gap-2">
                                        <span className="text-2xl">🔍</span> SEO Mastery
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>✓ On-Page Optimization</li>
                                        <li>✓ Schema Markup</li>
                                        <li>✓ Core Web Vitals</li>
                                        <li>✓ Google Ranking Strategies</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-bold text-lg mb-3 flex items-center gap-2">
                                        <span className="text-2xl">⚡</span> Modern Tech Stack
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>✓ Next.js 15 (Latest)</li>
                                        <li>✓ TypeScript</li>
                                        <li>✓ Tailwind CSS</li>
                                        <li>✓ Cloud Deployment</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section> */}

                {/* COMMUNITY & SOCIAL PROOF */}
                <section className="py-20 bg-muted-50">
                    <Container>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">Join Our Growing Community</h2>
                            <p className="text-lg text-muted-foreground">Thousands of students already learning with us</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            <div className="card p-6 md:p-8 text-center hover:border-primary transition-all">
                                <p className="text-4xl md:text-5xl font-bold text-primary mb-3">1L+</p>
                                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">YouTube Subscribers</p>
                                <p className="text-xs text-muted-foreground">Learning daily</p>
                            </div>

                            <div className="card p-6 md:p-8 text-center hover:border-primary transition-all">
                                <p className="text-4xl md:text-5xl font-bold text-primary mb-3">4K+</p>
                                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">Telegram Members</p>
                                <p className="text-xs text-muted-foreground">Active discussions</p>
                            </div>

                            <div className="card p-6 md:p-8 text-center hover:border-primary transition-all">
                                <p className="text-4xl md:text-5xl font-bold text-primary mb-3">1200+</p>
                                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">Active App Users</p>
                                <p className="text-xs text-muted-foreground">Tracking progress</p>
                            </div>

                            <div className="card p-6 md:p-8 text-center hover:border-primary transition-all">
                                <p className="text-4xl md:text-5xl font-bold text-primary mb-3">500+</p>
                                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">Paid Students</p>
                                <p className="text-xs text-muted-foreground">Premium access</p>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* WHAT WE OFFER */}
                <section className="py-20">
                    <Container>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">What You Get</h2>
                            <p className="text-lg text-muted-foreground">Complete learning ecosystem for aspiring developers</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="card p-8 border-l-4 border-l-primary">
                                <p className="text-2xl mb-3">📚</p>
                                <h3 className="text-xl font-bold mb-3">1200+ Tutorials</h3>
                                <p className="text-muted-foreground">In-depth guides covering HTML to Advanced Next.js, SEO optimization, and deployment strategies</p>
                            </div>

                            <div className="card p-8 border-l-4 border-l-primary">
                                <p className="text-2xl mb-3">🛣️</p>
                                <h3 className="text-xl font-bold mb-3">5+ Career Roadmaps</h3>
                                <p className="text-muted-foreground">Java Development, Next.js Mastery, Full-Stack, and SEO for Developers - step-by-step learning paths</p>
                            </div>

                            <div className="card p-8 border-l-4 border-l-primary">
                                <p className="text-2xl mb-3">🎬</p>
                                <h3 className="text-xl font-bold mb-3">Video Content</h3>
                                <p className="text-muted-foreground">YouTube channel with 1L+ subscribers explaining complex topics in simple Hinglish</p>
                            </div>

                            <div className="card p-8 border-l-4 border-l-primary">
                                <p className="text-2xl mb-3">🏆</p>
                                <h3 className="text-xl font-bold mb-3">10+ Projects</h3>
                                <p className="text-muted-foreground">Real-world project ideas with complete implementation from scratch to deployment</p>
                            </div>

                            <div className="card p-8 border-l-4 border-l-primary">
                                <p className="text-2xl mb-3">👨‍💻</p>
                                <h3 className="text-xl font-bold mb-3">Community Support</h3>
                                <p className="text-muted-foreground">Active Telegram community (4K+) for doubts, discussions, and networking</p>
                            </div>

                            <div className="card p-8 border-l-4 border-l-primary">
                                <p className="text-2xl mb-3">🎯</p>
                                <h3 className="text-xl font-bold mb-3">Career Guidance</h3>
                                <p className="text-muted-foreground">Premium courses and mentorship for those serious about becoming a developer</p>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* VALUES SECTION */}
                <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
                    <Container>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">💪</div>
                                <h3 className="text-xl font-bold mb-2">Practical</h3>
                                <p className="text-muted-foreground text-sm">Real projects, not just theory. Industry-ready skills, not textbook knowledge.</p>
                            </div>

                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">🌍</div>
                                <h3 className="text-xl font-bold mb-2">Accessible</h3>
                                <p className="text-muted-foreground text-sm">Language shouldn't be a barrier. Hinglish teaching for Indian students.</p>
                            </div>

                            <div className="text-center">
                                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">💯</div>
                                <h3 className="text-xl font-bold mb-2">Honest</h3>
                                <p className="text-muted-foreground text-sm">No false promises. Real experience. Real results. Transparent about what works.</p>
                            </div>

                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">🚀</div>
                                <h3 className="text-xl font-bold mb-2">Future-Ready</h3>
                                <p className="text-muted-foreground text-sm">Modern tech stack. Latest tools. Tomorrow's technologies today.</p>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* CTA SECTION */}
                <section className="py-20">
                    <Container>
                        <div className="text-center">
                            <h2 className="text-4xl font-bold mb-6">Ready to Start Learning?</h2>
                            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                                Join thousands of students already building their coding skills. Choose your path and start today.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button href="/roadmaps" variant="primary" className="p-6 text-lg">
                                    Explore Roadmaps
                                </Button>
                                <Button href="/blog" variant="secondary" className="p-6 text-lg">
                                    Browse Tutorials
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
