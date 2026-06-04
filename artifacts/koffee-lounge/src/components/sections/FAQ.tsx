import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need to make a reservation?",
    answer: "While walk-ins are always welcome, we highly recommend making a reservation, especially for dinner, weekend visits, and our all-you-can-eat specials to ensure you get a table without waiting."
  },
  {
    question: "What are your happy hour times?",
    answer: "Our happy hour runs daily from 4:00 PM to 7:00 PM, featuring special pricing on select craft cocktails, local beers, and signature bar bites."
  },
  {
    question: "Do you offer private event bookings?",
    answer: "Yes! Koffee Lounge provides a stunning backdrop for private events, corporate gatherings, and celebrations. Contact us directly to discuss custom menus and exclusive lounge bookings."
  },
  {
    question: "Is there parking available?",
    answer: "Yes, there is ample secure parking available for our guests within the Rose Pillars Shopping Village complex."
  },
  {
    question: "Do you have vegetarian or vegan options?",
    answer: "Absolutely. Our menu includes a variety of dietary-friendly options, from fresh salads to customized dishes. Just let your server know your preferences."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit/debit cards, mobile money (MoMo), and cash."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4"
          >
            Common <span className="text-primary italic font-normal">Questions</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border py-2">
                <AccordionTrigger className="text-left text-lg font-bold text-foreground hover:text-primary transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
