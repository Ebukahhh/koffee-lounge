import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import heroImg from "../../assets/hero.png";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Koffee Lounge Interior"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container relative z-10 px-6 md:px-12 mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="inline-block py-1 px-3 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-widest uppercase mb-6">
            More than just coffee
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-6">
            Accra's Premier <br className="hidden md:block" />
            <span className="text-primary italic font-normal">Dining & Lounge</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover a sophisticated sanctuary offering all-you-can-eat dining, handcrafted cocktails, and an unforgettable atmosphere in the heart of East Legon.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="tel:0553500312"
              className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-bold tracking-wide hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(201,130,10,0.3)] flex items-center justify-center gap-2"
            >
              Book a Table
            </a>
            <a
              href="#menu"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full text-base font-bold tracking-wide hover:bg-white/20 transition-all flex items-center justify-center gap-2 group"
            >
              View Menu
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Quick Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl bg-background/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">Location</h3>
              <p className="text-sm text-white/60">Rose Pillars Shopping Village,<br/>La-Bawaleshi Rd, Accra</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">Hours</h3>
              <p className="text-sm text-white/60">Open Daily<br/>Closes 12:00 AM</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">Reservations</h3>
              <p className="text-sm text-white/60">Call us to book<br/>055 350 0312</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
