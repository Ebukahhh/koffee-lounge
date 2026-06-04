import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-primary/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      
      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
            Ready to <span className="text-primary italic font-normal">Experience</span> It?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Join us at Koffee Lounge. Your table is waiting.
          </p>
          <a
            href="tel:0553500312"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-5 rounded-full text-lg font-bold tracking-wide hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(201,130,10,0.4)]"
          >
            Book a Table Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
