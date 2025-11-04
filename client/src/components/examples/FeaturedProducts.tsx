import FeaturedProducts from "../FeaturedProducts";
import hummingbird from "@assets/generated_images/Hummingbird_Garden_watercolor_art_6b30a45f.png";
import poppies from "@assets/generated_images/Sunny_Poppies_impressionist_painting_d1a4c988.png";
import wildflower from "@assets/generated_images/Wildflower_butterfly_watercolor_art_f12f4ade.png";
import cherry from "@assets/generated_images/Cherry_blossom_botanical_art_76b53e46.png";
import peacock from "@assets/generated_images/Peacock_watercolor_painting_455c02cc.png";
import lavender from "@assets/generated_images/Lavender_fields_botanical_art_f50da85c.png";

export default function FeaturedProductsExample() {
  const products = [
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
  ];

  return <FeaturedProducts products={products} />;
}
