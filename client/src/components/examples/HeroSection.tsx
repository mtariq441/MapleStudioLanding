import HeroSection from "../HeroSection";
import heroBackground from "@assets/generated_images/Forest_landscape_watercolor_hero_e89a3148.png";
import hummingbird from "@assets/generated_images/Hummingbird_Garden_watercolor_art_6b30a45f.png";
import poppies from "@assets/generated_images/Sunny_Poppies_impressionist_painting_d1a4c988.png";
import wildflower from "@assets/generated_images/Wildflower_butterfly_watercolor_art_f12f4ade.png";
import cherry from "@assets/generated_images/Cherry_blossom_botanical_art_76b53e46.png";
import peacock from "@assets/generated_images/Peacock_watercolor_painting_455c02cc.png";

export default function HeroSectionExample() {
  const slides = [
    { id: "hummingbird", image: hummingbird, title: "Hummingbird Garden", price: "$245" },
    { id: "poppies", image: poppies, title: "Sunny Poppies", price: "$320" },
    { id: "wildflower", image: wildflower, title: "Wildflower Dreams", price: "$285" },
    { id: "cherry", image: cherry, title: "Cherry Blossom", price: "$295" },
    { id: "peacock", image: peacock, title: "Majestic Peacock", price: "$380" },
  ];

  return <HeroSection backgroundImage={heroBackground} slides={slides} />;
}
