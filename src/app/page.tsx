import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import BlogCard from "@/components/ui/BlogCard";

export default function Home() {
  return (
    <>
      <SchemaMarkup type="WebSite" data={{}} />
      <SchemaMarkup type="Organization" data={{}} />
      <Header />

      <main>
        {/* HERO SECTION - Optimized for 'Learn Web Development Hindi' */}
        <section className="pt-32 pb-20 text-center relative overflow-hidden mesh-bg">
          <Container className="relative z-10">
            <div className="mb-6 inline-block text-primary font-bold text-sm animate-fade-in">
              #1 Coding Platform for Indian Students 🇮🇳
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 animate-fade-in tracking-tight leading-none">
              Master Full-Stack <br /> <span className="text-primary">Development & SEO</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Learn how to build high-performance websites and rank them on Google.
              Simple, Hinglish tutorials for absolute beginners to pro developers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Button href="/blog" variant="primary" className="p-8 text-lg">
                Explore All Tutorials
              </Button>
              <Button href="/roadmaps" variant="secondary" className="p-8 text-lg">
                View Career Paths
              </Button>
            </div>
          </Container>
        </section>

        {/* TECH STACK / TRUST BAR - SEO Keyword Rich */}
        <section className="py-8  mesh-bg">
          <Container>
            <p className="text-center text-sm font-bold text-muted-foreground mb-6 uppercase tracking-widest">Technologies You Will Master</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover-grayscale-0 transition-all">
              <span className="text-xl font-bold">Next.js 15</span>
              <span className="text-xl font-bold">TypeScript</span>
              <span className="text-xl font-bold">React.js</span>
              <span className="text-xl font-bold">Node.js</span>
              <span className="text-xl font-bold">Google SEO</span>
              <span className="text-xl font-bold">Tailwind CSS</span>
            </div>
          </Container>
        </section>

        {/* WHY CODING WALLAH - Trust Building */}
        <section className="py-20 mesh-bg">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Focus on Clarity, Not Complexity</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Boht saare log code sikhaate hain, par hum "Sahi Tareeka" sikhate hain.
                Hamare tutorials industry-ready aur SEO-friendly hote hain.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-center border-t-4 border-t-primary">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Practical Projects</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Har tutorial ek real-world problem solve karta hai. Sirf syntax nahi, implementation sikhein.
                </p>
              </div>
              <div className="card text-center border-t-4 border-t-primary">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">SEO Mastery</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Market mein developers ki kami nahi hai, par SEO-aware developers rare hain. Hum dono sikhate hain.
                </p>
              </div>
              <div className="card text-center border-t-4 border-t-primary">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">❤️ </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Hinglish Clarity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Language barrier ko khatam karein. Complex topics ko apni bhasha mein aasaan banayein.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* INSTRUCTOR CREDENTIALS - Trust Building & Social Proof */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Who's Behind This Platform?</h2>
              <p className="text-lg text-muted-foreground">
                Real experience. Real teaching. Real results.
              </p>
            </div>

            {/* Top: Experience & Tagline */}
            <div className="mb-12">
              <div className="card p-8 md:p-10 border-l-4 border-l-primary">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  {/* Left - Title & Experience */}
                  <div className="md:col-span-1">
                    <h3 className="text-3xl font-bold mb-4">
                      <span className="text-primary">8-10 Years</span> of Experience
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Coding Wallah is created by passionate developers with real-world expertise in building production-ready applications.
                    </p>
                  </div>

                  {/* Center - Core Expertise */}
                  <div className="md:col-span-1 space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-xl">★</span>
                      <div>
                        <p className="font-bold">Full-Stack Development</p>
                        <p className="text-xs text-muted-foreground">Frontend to Backend scalable apps</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-xl">★</span>
                      <div>
                        <p className="font-bold">SEO & Optimization</p>
                        <p className="text-xs text-muted-foreground">Ranking #1 on Google</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-xl">★</span>
                      <div>
                        <p className="font-bold">Modern Tech Stack</p>
                        <p className="text-xs text-muted-foreground">Next.js, React, Node.js</p>
                      </div>
                    </div>
                  </div>

                  {/* Right - Key Stats */}
                  <div className="md:col-span-1 space-y-2">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <p className="text-3xl font-bold text-primary">8-10</p>
                      <p className="text-xs font-bold uppercase tracking-widest">Years</p>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <p className="text-3xl font-bold text-primary">5+</p>
                      <p className="text-xs font-bold uppercase tracking-widest">Live Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: Community & Social Proof */}
            <div>
              <p className="text-center text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">
                Join Our Growing Community
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="card p-6 text-center hover:border-primary transition-colors">
                  <p className="text-4xl font-bold text-primary mb-2">1L+</p>
                  <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">YouTube Subscribers</p>
                  <p className="text-xs text-muted-foreground mt-1">Learning daily</p>
                </div>
                <div className="card p-6 text-center hover:border-primary transition-colors">
                  <p className="text-4xl font-bold text-primary mb-2">4K+</p>
                  <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Telegram Community</p>
                  <p className="text-xs text-muted-foreground mt-1">Active discussions</p>
                </div>
                <div className="card p-6 text-center hover:border-primary transition-colors">
                  <p className="text-4xl font-bold text-primary mb-2">1200+</p>
                  <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Active App Users</p>
                  <p className="text-xs text-muted-foreground mt-1">Tracking progress</p>
                </div>
                <div className="card p-6 text-center hover:border-primary transition-colors">
                  <p className="text-4xl font-bold text-primary mb-2">500+</p>
                  <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Paid Students</p>
                  <p className="text-xs text-muted-foreground mt-1">Premium access</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CORE TOPICS - SEO Hub Section */}
        <section className="py-20 bg-muted-50">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Target the Right Career Path</h2>
                <p className="text-lg mb-8 leading-relaxed">
                  Chahe aap Frontend Developer banna chahein ya Full-stack Expert, hamare curated
                  learning paths aapko step-by-step guide karenge.
                </p>
                <ul className="flex flex-col gap-4 mb-8">
                  <li className="flex items-center gap-3 font-medium">
                    <span className="text-primary font-bold">✓</span> Frontend Mastery (React & Next.js)
                  </li>
                  <li className="flex items-center gap-3 font-medium">
                    <span className="text-primary font-bold">✓</span> Backend Architecture (Node & Databases)
                  </li>
                  <li className="flex items-center gap-3 font-medium">
                    <span className="text-primary font-bold">✓</span> Advanced SEO for Web Success
                  </li>
                  <li className="flex items-center gap-3 font-medium">
                    <span className="text-primary font-bold">✓</span> Deployment & Cloud Essentials
                  </li>
                </ul>
                <Button href="/services" variant="primary">Browse All Paths</Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="card glass p-6 aspect-square flex flex-col justify-center items-center text-center">
                  <p className="text-3xl font-bold text-primary mb-2">1000+</p>
                  <p className="text-xs font-bold uppercase tracking-tighter">Students</p>
                </div>
                <div className="card glass p-6 aspect-square flex flex-col justify-center items-center text-center mt-8">
                  <p className="text-3xl font-bold text-primary mb-2">120+</p>
                  <p className="text-xs font-bold uppercase tracking-tighter">Tutorials</p>
                </div>
                <div className="card glass p-6 aspect-square flex flex-col justify-center items-center text-center">
                  <p className="text-3xl font-bold text-primary mb-2">10+</p>
                  <p className="text-xs font-bold uppercase tracking-tighter">Projects</p>
                </div>
                <div className="card glass p-6 aspect-square flex flex-col justify-center items-center text-center mt-8">
                  <p className="text-3xl font-bold text-primary mb-2">FREE</p>
                  <p className="text-xs font-bold uppercase tracking-tighter">Resources</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* LATEST TUTORIALS PREVIEW - Internal Linking */}
        <section className="py-20">
          <Container>
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2">Recent Coding Guides</h2>
                <p className="text-muted-foreground">Keep updated with the latest in tech.</p>
              </div>
              <Button href="/blog" variant="secondary">View All</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <BlogCard
                title="Next.js 15 SEO Guide"
                description="Google ranking ke liye Next.js website ko optimize kaise karein? Full Guide."
                slug="nextjs-seo-guide"
                date="Jan 17, 2026"
              />
              <BlogCard
                title="React Hooks Explained"
                description="useState aur useEffect ko Hinglish mein aasaan bhasha mein samjhein."
                slug="react-hooks-hindi"
                date="Jan 15, 2026"
              />
              <BlogCard
                title="VS Code Setup for Pro"
                description="Top extensions aur settings jo aapki coding speed 2x kar dengi."
                slug="vscode-pro-setup"
                date="Jan 12, 2026"
              />
            </div>
          </Container>
        </section>

        {/* FAQ - Rich Snippet Ready */}
        <section className="py-20 bg-muted-30">
          <Container className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-12 text-center underline decoration-primary decoration-4 underline-offset-8">Common Doubts</h2>
            <div className="flex flex-col gap-8">
              <div className="card bg-black">
                <h3 className="font-bold text-xl mb-3">Kya Coding Wallah ke courses free hain?</h3>
                <p className="text-muted-foreground">Haan, humara content mostly YouTube aur website par free available hai for helping maximum students.</p>
              </div>
              <div className="card bg-black">
                <h3 className="font-bold text-xl mb-3">Does SEO really matter for developers?</h3>
                <p className="text-muted-foreground">Absolutely. Agar aap ek great project banaate hain par wo Google par nahi dikhta, toh uski reach limited rahegi.</p>
              </div>
              <div className="card bg-black">
                <h3 className="font-bold text-xl mb-3">Best laptop for web development?</h3>
                <p className="text-muted-foreground">Minimum 8GB RAM aur SSD wala koi bhi budget laptop is enough to start your journey.</p>
              </div>
            </div>
            <SchemaMarkup type="FAQPage" data={{
              mainEntity: [
                {
                  "@type": "Question",
                  "name": "Kya Coding Wallah ke courses free hain?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes, our primary mission is to provide free, high-quality coding education to every Indian student." }
                }
              ]
            }} />
          </Container>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 text-white text-center">
          <Container>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white">Ab Intezaar Kis Baat Ka?</h2>
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto text-white">
              Join thousands of students and start building projects that matter.
              Aaj hi apni pehli "Hello World" likhein hamare saath.
            </p>
            <Button href="/blog" className="p-8 text-xl btn-white border-none ring-offset-primary">
              Chalo Shuru Karte Hain!
            </Button>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
