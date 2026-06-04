import { motion } from "framer-motion";

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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {menuData.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <h3 className="text-2xl font-serif font-bold text-primary mb-6 border-b border-border/50 pb-3">
                {section.category}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center justify-between group">
                    <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {item.name}
                    </span>
                    <span className="flex-grow border-b border-dotted border-muted-foreground/30 mx-4 relative top-1"></span>
                    <span className="text-primary font-bold whitespace-nowrap">
                      GHS {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
