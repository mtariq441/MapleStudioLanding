import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  backgroundImage: string;
}

export default function HeroSection({ backgroundImage }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-purple-900/20 to-black/70" />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.h1 
            className="font-serif text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Maple Sugar
            </motion.span>{" "}
            <motion.span
              className="inline-block gradient-text"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Studio
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Where imagination meets reality through handmade art
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground border border-primary-border hover-elevate active-elevate-2 rounded-full px-8 backdrop-blur-sm glow-effect"
              data-testid="button-shop-collection"
            >
              Shop Collection
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="glass-effect text-white hover-elevate active-elevate-2 rounded-full px-8"
              data-testid="button-view-gallery"
            >
              View Gallery
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      />
    </section>
  );
}
