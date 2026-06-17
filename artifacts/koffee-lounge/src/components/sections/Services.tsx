import { motion } from "framer-motion";
import { Utensils, GlassWater, Sparkles } from "lucide-react";
import allYouCanEatImg from "../../assets/all-you-can-eat.jpg";
import happyHourImg from "../../assets/happy-hour.jpg";
import cocktailsImg from "../../assets/cocktails.jpg";

const services = [
  {
    icon: <Utensils className="w-8 h-8" />,
    title: "All You Can Eat",
    description: "Indulge in a boundless culinary experience featuring our chef's finest creations and signature dishes.",
    image: allYouCanEatImg,
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Happy Hour",
    description: "Elevate your evenings with our specially curated happy-hour menu, offering premium bites and a vibrant lounge atmosphere.",
    image: happyHourImg,
  },
  {
    icon: <GlassWater className="w-8 h-8" />,
    title: "Great Cocktails",
    description: "Sip on masterfully crafted cocktails, balancing bold local flavors with classic mixology techniques.",
    image: cocktailsImg,
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
              className="bg-card border border-border p-8 md:p-10 rounded-2xl group hover:border-primary/50 transition-all duration-500 relative overflow-hidden min-h-[380px] flex flex-col justify-end cursor-pointer"
            >
              {/* Hover Image Reveal Background */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out scale-110 group-hover:scale-100 pointer-events-none">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Dark Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/45"></div>
              </div>

              {/* Decorative top corner background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110 z-10 pointer-events-none"></div>
              
              {/* Card Content */}
              <div className="relative z-10 flex flex-col items-start h-full justify-between gap-12">
                <div className="w-16 h-16 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary border border-border shadow-sm group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-500">
                  {service.icon}
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-neutral-200 leading-relaxed transition-colors duration-300 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
