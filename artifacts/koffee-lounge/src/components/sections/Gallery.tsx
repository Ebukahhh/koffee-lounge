import { motion } from "framer-motion";
import gallery1 from "../../assets/gallery-1.png";
import gallery2 from "../../assets/gallery-2.png";
import gallery3 from "../../assets/gallery-3.png";
import gallery4 from "../../assets/gallery-4.png";
import gallery5 from "../../assets/gallery-5.png";
import gallery6 from "../../assets/gallery-6.png";

export function Gallery() {
  const images = [
    { src: gallery1, alt: "Coffee latte art", aspect: "aspect-[4/3]" },
    { src: gallery4, alt: "Moody lounge seating", aspect: "aspect-[3/4]" },
    { src: gallery3, alt: "Ghanaian breakfast plate", aspect: "aspect-[4/3]" },
    { src: gallery2, alt: "Craft cocktails", aspect: "aspect-[3/4]" },
    { src: gallery6, alt: "Elegant pastry", aspect: "aspect-[3/4]" },
    { src: gallery5, alt: "Espresso machine", aspect: "aspect-[4/3]" },
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4"
          >
            A Glimpse <span className="text-primary italic font-normal">Inside</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Sensuous lighting, rich textures, and beautifully crafted food.
          </motion.p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-card border border-border"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement?.classList.add('min-h-[300px]', 'flex', 'items-center', 'justify-center', 'bg-muted');
                }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-serif text-lg">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
