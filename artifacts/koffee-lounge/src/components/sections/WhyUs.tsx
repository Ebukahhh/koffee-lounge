import { motion } from "framer-motion";
import { Star, MapPin, Coffee, Users } from "lucide-react";

export function WhyUs() {
  const reasons = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Highly Rated",
      description: "4.2 rating from over 1.2K reviews. Loved by locals and visitors alike.",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Prime Location",
      description: "Conveniently situated at Rose Pillars Shopping Village in East Legon.",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Premium Variety",
      description: "From artisanal breakfast plates to late-night craft cocktails.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "The Vibe",
      description: "Warm amber lighting, dark wood, and a sophisticated atmosphere.",
    },
  ];

  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Why Choose <br/>
                <span className="text-primary italic font-normal">Koffee Lounge?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We believe that dining is more than just eating; it's an experience. We've crafted every detail of Koffee Lounge to offer a warm, memorable escape from the bustling city.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {reasons.map((reason, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      {reason.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{reason.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full max-w-lg mx-auto rounded-3xl overflow-hidden border border-border"
            >
              {/* Fallback pattern if image not available, or we use a decorative element */}
              <div className="absolute inset-0 bg-background flex flex-col items-center justify-center p-8 text-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background">
                 <div className="w-24 h-24 rounded-full border-2 border-primary/30 flex items-center justify-center mb-6">
                   <Star className="w-10 h-10 text-primary fill-primary" />
                 </div>
                 <h3 className="text-3xl font-serif text-foreground font-bold mb-2">4.2 Stars</h3>
                 <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Google Reviews</p>
                 <p className="text-muted-foreground max-w-xs italic">
                   "The best atmosphere in East Legon. Amazing cocktails and the all-you-can-eat is incredible."
                 </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
