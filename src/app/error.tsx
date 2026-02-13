"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to external service in production
    console.error("App Error:", error);
  }, [error]);

  return (
    <>
      <Header />
      <main className="flex-grow py-20">
        <Container className="text-center">
          <div className="max-w-2xl mx-auto">
            {/* Error Icon */}
            <div className="mb-8 flex justify-center">
              <AlertTriangle size={88} className="text-orange-500" />
            </div>

            {/* Error Message */}
            <h2 className="text-4xl font-bold mb-4">Oops! Something Went Wrong</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We encountered an unexpected error while processing your request. Our team has been notified and is working to fix the issue.
            </p>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === "development" && error?.message && (
              <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-lg p-4 mb-8 text-left">
                <p className="text-sm font-mono text-red-600 dark:text-red-400">
                  <strong>Error:</strong> {error.message}
                </p>
                {error.digest && (
                  <p className="text-xs text-muted-foreground mt-2">
                    Digest: {error.digest}
                  </p>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="bg-muted rounded-lg p-8 mb-12">
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-6">
                What you can do:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={reset}
                  className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors inline-block"
                >
                  Try Again
                </button>
                <Link 
                  href="/" 
                  className="px-8 py-3 border border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-colors inline-block"
                >
                  Go to Home
                </Link>
                <Link 
                  href="/contact" 
                  className="px-8 py-3 border border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-colors inline-block"
                >
                  Report Issue
                </Link>
              </div>
            </div>

            {/* Support Message */}
            <p className="text-sm text-muted-foreground">
              If the problem persists, please <Link href="/contact" className="text-primary font-bold hover:underline">contact our support team</Link>.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
