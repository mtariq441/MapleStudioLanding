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
    <section ref={ref} className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-4">
            Artwork Showcase
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through our stunning collection of handmade artwork
          </p>
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
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative flex-shrink-0 w-72 h-72 cursor-pointer"
                    onClick={() => setCurrentSlide(index)}
                    data-testid={`slider-item-${product.id}`}
                  >
                    <div className="relative w-full h-full rounded-md overflow-hidden shadow-xl border border-border">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6"
                        >
                          <p className="text-white font-serif text-2xl mb-1">{product.title}</p>
                          <p className="text-white/90 text-lg font-medium">{product.price}</p>
                        </motion.div>
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
