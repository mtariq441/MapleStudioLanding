import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import BiographySection from "@/components/BiographySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import heroBackground from "@assets/generated_images/Forest_landscape_watercolor_hero_e89a3148.png";
import hummingbird from "@assets/generated_images/Hummingbird_Garden_watercolor_art_6b30a45f.png";
import poppies from "@assets/generated_images/Sunny_Poppies_impressionist_painting_d1a4c988.png";
import wildflower from "@assets/generated_images/Wildflower_butterfly_watercolor_art_f12f4ade.png";
import cherry from "@assets/generated_images/Cherry_blossom_botanical_art_76b53e46.png";
import peacock from "@assets/generated_images/Peacock_watercolor_painting_455c02cc.png";
import lavender from "@assets/generated_images/Lavender_fields_botanical_art_f50da85c.png";
import magnolia from "@assets/generated_images/Magnolia_flowers_watercolor_art_1e590680.png";
import sunset from "@assets/generated_images/Sunset_wildflower_landscape_art_f906dc34.png";
import artistPhoto from "@assets/generated_images/Artist_portrait_studio_photo_ea6d82fe.png";

export default function Home() {
  const heroSlides = [
    { id: "hummingbird", image: hummingbird, title: "Hummingbird Garden", price: "$245" },
    { id: "poppies", image: poppies, title: "Sunny Poppies", price: "$320" },
    { id: "wildflower", image: wildflower, title: "Wildflower Dreams", price: "$285" },
    { id: "cherry", image: cherry, title: "Cherry Blossom", price: "$295" },
    { id: "peacock", image: peacock, title: "Majestic Peacock", price: "$380" },
  ];

  const featuredProducts = [
    {
      id: "hummingbird",
      image: hummingbird,
      title: "Hummingbird Garden",
      price: "$245",
      description: "Delicate watercolor featuring nature's tiny jewel",
    },
    {
      id: "poppies",
      image: poppies,
      title: "Sunny Poppies",
      price: "$320",
      description: "Vibrant impressionist celebration of summer blooms",
    },
    {
      id: "wildflower",
      image: wildflower,
      title: "Wildflower Dreams",
      price: "$285",
      description: "Ethereal composition with butterflies and blooms",
    },
    {
      id: "cherry",
      image: cherry,
      title: "Cherry Blossom",
      price: "$295",
      description: "Serene spring masterpiece in soft pastels",
    },
    {
      id: "peacock",
      image: peacock,
      title: "Majestic Peacock",
      price: "$380",
      description: "Bold watercolor showcasing nature's elegance",
    },
    {
      id: "lavender",
      image: lavender,
      title: "Lavender Fields",
      price: "$310",
      description: "Peaceful botanical illustration of purple serenity",
    },
    {
      id: "magnolia",
      image: magnolia,
      title: "Magnolia Blossoms",
      price: "$275",
      description: "Elegant white flowers in delicate watercolor",
    },
    {
      id: "sunset",
      image: sunset,
      title: "Sunset Meadow",
      price: "$350",
      description: "Dreamy landscape bathed in golden light",
    },
  ];

  const biography = [
    "Megan Reiniger is a passionate artist whose work bridges the gap between imagination and the natural world. With over 15 years of experience in watercolor and botanical illustration, she has developed a distinctive style that celebrates nature's inherent beauty.",
    "Each piece begins with careful observation and sketches from nature, then transforms through Megan's artistic vision into works that capture not just what she sees, but what she feels. Her studio, nestled in the countryside, serves as both workshop and sanctuary.",
    "Megan's art has been featured in galleries across the country and graces the homes of collectors who appreciate the delicate balance of technical skill and emotional resonance in her work.",
  ];

  return (
    <div className="min-h-screen">
      <HeroSection backgroundImage={heroBackground} slides={heroSlides} />
      <AboutSection
        title="The Art of Imagination"
        philosophy="My work is the union of imagination and reality, where nature's beauty transforms into timeless art."
        description="Each piece is carefully crafted by hand, bringing together traditional techniques with modern artistic vision. From vibrant watercolors to delicate botanical illustrations, every artwork tells a unique story inspired by the natural world around us."
      />
      <FeaturedProducts products={featuredProducts} />
      <BiographySection
        artistName="Megan Reiniger"
        artistPhoto={artistPhoto}
        biography={biography}
      />
      <ContactSection />
      <Footer />
    </div>
  );
}
