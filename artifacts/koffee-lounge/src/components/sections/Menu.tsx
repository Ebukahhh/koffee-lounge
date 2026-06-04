import { motion } from "framer-motion";
import menuImg from "@assets/image_1780568884270.png";

const menuData = [
  {
    category: "Breakfast",
    items: [
      { name: "Beans on Toast", price: "85" },
      { name: "Continental Breakfast", price: "85" },
      { name: "Egg on Toast", price: "85" },
      { name: "Full Breakfast", price: "100" },
      { name: "Omelet on Toast", price: "85" },
      { name: "Scrambled Eggs on Toast", price: "85" },
    ]
  },
  {
    category: "Coffee",
    items: [
      { name: "Americano", price: "35" },
      { name: "Cafe Latte", price: "40" },
      { name: "Cafe Mocha", price: "45" },
      { name: "Cappuccino", price: "40" },
      { name: "Espresso", price: "35" },
      { name: "Frappuccino", price: "60" },
      { name: "Hot Chocolate", price: "50" },
      { name: "Ice Coffee", price: "40" },
      { name: "Ice Latte", price: "45" },
    ]
  },
  {
    category: "Sandwiches",
    items: [
      { name: "Cheese Salad", price: "50" },
      { name: "Chicken Salad", price: "50" },
      { name: "Bacon & Sausage Club", price: "70" },
      { name: "Chicken & Avocado", price: "70" },
    ]
  },
  {
    category: "Salads",
    items: [
      { name: "Avocado Salad", price: "70" },
      { name: "Chicken Salad", price: "75" },
      { name: "Ghanaian Salad", price: "90" },
      { name: "Greek Salad", price: "75" },
    ]
  },
  {
    category: "Extra's",
    items: [
      { name: "Side Salad", price: "40" },
      { name: "Chips", price: "40" },
      { name: "Bacon", price: "40" },
      { name: "Coleslaw", price: "25" },
    ]
  }
];

export function Menu() {
  return (
    <section id="menu" className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4"
          >
            Our <span className="text-primary italic font-normal">Menu</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Carefully crafted dishes and beverages for every taste.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden border border-border shadow-2xl relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none z-10"></div>
            <img 
              src={menuImg} 
              alt="Koffee Lounge Menu" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" 
              loading="lazy"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {menuData.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-serif font-bold text-primary mb-6 border-b border-border/50 pb-2">
                  {section.category}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center justify-between group">
                      <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {item.name}
                      </span>
                      <span className="flex-grow border-b border-dotted border-muted-foreground/30 mx-4 relative top-1"></span>
                      <span className="text-muted-foreground font-bold whitespace-nowrap">
                        GHS {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
