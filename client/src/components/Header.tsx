import { Moon, Sun, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="font-serif text-2xl text-foreground">Maple Sugar Studio</h1>
        </div>

        <div className="flex items-center gap-3">
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full hover-elevate active-elevate-2"
            data-testid="button-shopping-cart"
          >
            <ShoppingBag className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={toggleTheme}
            className="rounded-full hover-elevate active-elevate-2"
            data-testid="button-theme-toggle"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
