import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SliderProduct {
  id: string;
  image: string;
  title: string;
  price: string;
}

interface ProductSliderProps {
  products: SliderProduct[];
}

export default function ProductSlider({ products }: ProductSliderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section ref={ref} className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="font-serif text-5xl md:text-6xl text-foreground mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Artwork Showcase
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Browse through our stunning collection of handmade artwork
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 justify-center">
            <Button
              size="icon"
              variant="outline"
              className="rounded-full hover-elevate active-elevate-2"
              onClick={prevSlide}
              data-testid="button-slider-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-4 overflow-hidden">
              {products.map((product, index) => {
                const offset = index - currentSlide;
                const isActive = index === currentSlide;
                
                return (
                  <motion.div
                    key={product.id}
                    animate={{
                      scale: isActive ? 1 : 0.85,
                      opacity: Math.abs(offset) <= 1 ? 1 : 0,
                      x: offset * 320,
                    }}
                    whileHover={{ scale: isActive ? 1.02 : 0.87 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative flex-shrink-0 w-72 h-72 cursor-pointer group"
                    onClick={() => setCurrentSlide(index)}
                    data-testid={`slider-item-${product.id}`}
                  >
                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-border/50 premium-card">
                      <motion.img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                          className="absolute inset-0 bg-gradient-to-t from-black/90 via-purple-900/30 to-transparent flex flex-col justify-end p-6"
                        >
                          <motion.p 
                            className="text-white font-serif text-2xl mb-1"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                          >
                            {product.title}
                          </motion.p>
                          <motion.p 
                            className="text-purple-300 text-lg font-medium"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                          >
                            {product.price}
                          </motion.p>
                        </motion.div>
                      )}
                      {!isActive && (
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <Button
              size="icon"
              variant="outline"
              className="rounded-full hover-elevate active-elevate-2"
              onClick={nextSlide}
              data-testid="button-slider-next"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {products.map((product, index) => (
              <button
                key={product.id}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/40 hover-elevate"
                }`}
                data-testid={`slider-dot-${product.id}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
