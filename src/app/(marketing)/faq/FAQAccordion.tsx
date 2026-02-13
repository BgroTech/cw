"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

interface FAQAccordionProps {
  question: string;
  answer: string;
  number: number;
}

export default function FAQAccordion({ question, answer, number }: FAQAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: number * 0.05 }}
      className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-start justify-between bg-card hover:bg-muted/50 transition-colors text-left"
      >
        <div className="flex items-start gap-4 flex-1">
          <span className="text-primary font-bold text-lg shrink-0 mt-1">Q{number}</span>
          <h3 className="text-lg font-bold text-foreground">{question}</h3>
        </div>
        <ChevronDown 
          size={20} 
          className={`text-primary shrink-0 transition-transform duration-300 mt-1 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 py-4 bg-muted/30 border-t border-border text-muted-foreground leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
}
