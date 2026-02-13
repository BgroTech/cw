import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-grow py-20">
        <Container className="text-center">
          <div className="max-w-2xl mx-auto">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-9xl md:text-[150px] font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                404
              </h1>
            </div>

            {/* Error Message */}
            <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Sorry! The page you're looking for doesn't exist. It might have been moved, deleted, or never existed in the first place.
            </p>

            {/* Helpful Links */}
            <div className="bg-muted rounded-lg p-8 mb-12">
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-6">
                Here's where you can go instead:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link 
                  href="/" 
                  className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors inline-block"
                >
                  Go to Home
                </Link>
                <Link 
                  href="/blog" 
                  className="px-8 py-3 border border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-colors inline-block"
                >
                  Explore Blog
                </Link>
                <Link 
                  href="/roadmaps" 
                  className="px-8 py-3 border border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-colors inline-block"
                >
                  View Roadmaps
                </Link>
              </div>
            </div>

            {/* Search Suggestion */}
            <p className="text-sm text-muted-foreground">
              If you believe this is a mistake, please <Link href="/contact" className="text-primary font-bold hover:underline">contact us</Link>.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
