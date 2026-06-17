import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MapPin, Coffee, Users, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  rating: number;
  name: string;
  role: string;
  text: string;
  initials: string;
  avatarBg: string;
}

const testimonials: Testimonial[] = [
  {
    rating: 5,
    name: "Kofi Agyemang",
    role: "Local Guide",
    text: "The best atmosphere in East Legon. Amazing cocktails, cozy amber lighting, and the all-you-can-eat wings are absolutely incredible.",
    initials: "KA",
    avatarBg: "bg-amber-700/80",
  },
  {
    rating: 5,
    name: "Ama Owusu",
    role: "Regular Customer",
    text: "Great coffee in the morning and a lovely vibe to work from. The staff is super friendly, and the Ghanaian breakfast plates are superb!",
    initials: "AO",
    avatarBg: "bg-yellow-700/80",
  },
  {
    rating: 5,
    name: "David Kpodo",
    role: "Food Enthusiast",
    text: "Happy hour cocktails are top-notch and beautifully crafted. Love the dark wood design. A true sanctuary in the heart of the city.",
    initials: "DK",
    avatarBg: "bg-orange-700/80",
  },
];

export function WhyUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const reasons = [
    {
      icon: <Star className="w-5 h-5" />,
      title: "Highly Rated",
      description: "4.2 rating from over 1.2K reviews. Loved by locals and visitors alike.",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Prime Location",
      description: "Conveniently situated at Rose Pillars Shopping Village in East Legon.",
    },
    {
      icon: <Coffee className="w-5 h-5" />,
      title: "Premium Variety",
      description: "From artisanal breakfast plates to late-night craft cocktails.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "The Vibe",
      description: "Warm amber lighting, dark wood, and a sophisticated atmosphere.",
    },
  ];

  return (
    <section className="py-24 bg-card border-y border-border relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Panel: Feature Descriptions */}
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
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-xl">
                We believe that dining is more than just eating; it's an experience. We've crafted every detail of Koffee Lounge to offer a warm, memorable escape from the bustling city.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {reasons.map((reason, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ y: -4 }}
                    className="flex gap-4 p-4 rounded-xl border border-transparent hover:border-border hover:bg-background/40 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      {reason.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{reason.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Right Panel: Interactive Testimonials Card */}
          <div className="lg:w-1/2 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full max-w-lg mx-auto rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-background/90 via-background/40 to-background/90 backdrop-blur-md flex flex-col justify-between p-8 md:p-10 shadow-xl"
            >


              {/* Slider Content */}
              <div className="my-auto min-h-[140px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <p className="text-lg md:text-xl text-foreground font-light italic leading-relaxed text-left mb-6">
                      "{testimonials[activeIndex].text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${testimonials[activeIndex].avatarBg} flex items-center justify-center text-white font-semibold text-sm`}>
                        {testimonials[activeIndex].initials}
                      </div>
                      <div className="text-left">
                        <h5 className="font-bold text-foreground text-sm">{testimonials[activeIndex].name}</h5>
                        <p className="text-xs text-muted-foreground">{testimonials[activeIndex].role}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Card Footer: Navigation Controls */}
              <div className="flex items-center justify-between border-t border-border/50 pt-6">
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        idx === activeIndex ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
