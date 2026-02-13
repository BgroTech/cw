import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import FAQAccordion from "./FAQAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Coding Wallah",
  description: "Get answers to common questions about our courses, learning experience, and career paths. Learn about Java, Next.js, and SEO training.",
  keywords: ["FAQ", "coding courses", "learning resources", "career guidance"],
};

const faqs = [
  {
    question: "Is Coding Wallah suitable for absolute beginners?",
    answer: "Absolutely! Our courses are designed for absolute beginners. We break down complex concepts into simple, easy-to-understand explanations in Hinglish. You don't need any prior programming experience to start."
  },
  {
    question: "What experience does Coding Wallah have?",
    answer: "Coding Wallah is run by instructors with 8-10 years of industry experience in web development, full-stack development, and SEO optimization. We bring real-world knowledge to every course."
  },
  {
    question: "How long does it take to complete a roadmap?",
    answer: "It depends on your pace and availability. Each roadmap is designed for self-paced learning. Most students complete a roadmap in 3-6 months with consistent practice (4-5 hours per week)."
  },
  {
    question: "Can I track my learning progress?",
    answer: "Yes! You can mark topics as complete and see your progress percentage on the interactive roadmaps. Your progress is saved locally on your device."
  },
  {
    question: "Is the Java Developer Roadmap up-to-date?",
    answer: "Yes! Our Java roadmap is regularly updated to include latest technologies like Java 21, Spring Boot 3+, and modern microservices practices."
  },
  {
    question: "What's the difference between the roadmaps?",
    answer: "Each roadmap is tailored for a specific career path. Java Developer focuses on backend development, Next.js Mastery on frontend, Full-Stack on both, and SEO for Developers on search engine optimization."
  },
  {
    question: "Can I ask for help when I'm stuck?",
    answer: "Yes! You can reach out via our contact page. We also recommend checking the recommended resources for each topic and exploring community forums for specific programming questions."
  },
  {
    question: "Do I get a certificate after completing?",
    answer: "Currently, we provide learning roadmaps and tracking. For formal certifications, we recommend completing projects from our guides and building a portfolio to showcase your skills."
  },
  {
    question: "Is this completely free?",
    answer: "Yes! All our learning roadmaps and blog tutorials are completely free. We believe in making quality education accessible to everyone."
  },
  {
    question: "How can I stay updated with new content?",
    answer: "Follow us on Twitter (@codingwallah) or check back on our blog regularly. New tutorials are published frequently covering the latest technologies."
  }
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <SchemaMarkup 
        type="FAQPage" 
        data={{
          mainEntity: faqs.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer
            }
          }))
        }}
      />
      
      <Header />
      
      <main className="min-h-screen py-20">
        <Container className="max-w-3xl">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about learning with Coding Wallah.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQAccordion 
                key={index} 
                question={faq.question} 
                answer={faq.answer}
                number={index + 1}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Don't see your question answered here? Get in touch with us directly.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
