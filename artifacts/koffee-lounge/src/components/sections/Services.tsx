import { motion } from "framer-motion";
import { Utensils, GlassWater, Sparkles } from "lucide-react";

const services = [
  {
    icon: <Utensils className="w-8 h-8" />,
    title: "All You Can Eat",
    description: "Indulge in a boundless culinary experience featuring our chef's finest creations and signature Ghanaian dishes.",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Happy Hour",
    description: "Elevate your evenings with our specially curated happy-hour menu, offering premium bites and a vibrant lounge atmosphere.",
  },
  {
    icon: <GlassWater className="w-8 h-8" />,
    title: "Great Cocktails",
    description: "Sip on masterfully crafted cocktails, balancing bold local flavors with classic mixology techniques.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4"
          >
            The Koffee Lounge <span className="text-primary italic font-normal">Experience</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Curated offerings designed to delight your senses from morning coffee to midnight cocktails.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-card border border-border p-10 rounded-2xl group hover:border-primary/50 transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              
              <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center text-primary mb-6 border border-border shadow-sm group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
