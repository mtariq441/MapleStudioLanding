import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface HeroSlide {
  id: string;
  image: string;
  title: string;
  price: string;
}

interface HeroSectionProps {
  backgroundImage: string;
  slides: HeroSlide[];
}

export default function HeroSection({ backgroundImage, slides }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            Maple Sugar Studio
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Where imagination meets reality through handmade art
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex gap-4 justify-center mb-16"
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground border border-primary-border hover-elevate active-elevate-2 rounded-full px-8 backdrop-blur-sm"
            data-testid="button-shop-collection"
          >
            Shop Collection
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="backdrop-blur-md bg-white/10 border-white/30 text-white hover-elevate active-elevate-2 rounded-full px-8"
            data-testid="button-view-gallery"
          >
            View Gallery
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 justify-center">
            <Button
              size="icon"
              variant="ghost"
              className="backdrop-blur-md bg-white/10 border-white/20 text-white hover-elevate active-elevate-2 rounded-full"
              onClick={prevSlide}
              data-testid="button-prev-slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-4 overflow-hidden">
              {slides.map((slide, index) => {
                const offset = index - currentSlide;
                const isActive = index === currentSlide;
                
                return (
                  <motion.div
                    key={slide.id}
                    animate={{
                      scale: isActive ? 1 : 0.85,
                      opacity: Math.abs(offset) <= 1 ? 1 : 0,
                      x: offset * 280,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative flex-shrink-0 w-64 h-64 cursor-pointer"
                    onClick={() => setCurrentSlide(index)}
                    data-testid={`slide-${slide.id}`}
                  >
                    <div className="relative w-full h-full rounded-md overflow-hidden shadow-xl border-2 border-white/20">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4"
                        >
                          <p className="text-white font-medium text-lg">{slide.title}</p>
                          <p className="text-white/90 text-sm">{slide.price}</p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <Button
              size="icon"
              variant="ghost"
              className="backdrop-blur-md bg-white/10 border-white/20 text-white hover-elevate active-elevate-2 rounded-full"
              onClick={nextSlide}
              data-testid="button-next-slide"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-white w-8"
                    : "bg-white/40 hover-elevate"
                }`}
                data-testid={`dot-${slide.id}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
