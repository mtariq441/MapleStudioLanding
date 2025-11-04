import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  backgroundImage: string;
}

export default function HeroSection({ backgroundImage }: HeroSectionProps) {
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
          className="flex gap-4 justify-center"
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
      </div>
    </section>
  );
}
