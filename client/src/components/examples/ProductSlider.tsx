import ProductSlider from "../ProductSlider";
import hummingbird from "@assets/image_1762290411539.png";
import poppies from "@assets/image_1762290446320.png";
import wildflower from "@assets/generated_images/Wildflower_butterfly_watercolor_art_f12f4ade.png";
import cherry from "@assets/generated_images/Cherry_blossom_botanical_art_76b53e46.png";
import peacock from "@assets/generated_images/Peacock_watercolor_painting_455c02cc.png";

export default function ProductSliderExample() {
  const products = [
    { id: "hummingbird", image: hummingbird, title: "Hummingbird Garden", price: "$245" },
    { id: "poppies", image: poppies, title: "Sunny Poppies", price: "$320" },
    { id: "wildflower", image: wildflower, title: "Wildflower Dreams", price: "$285" },
    { id: "cherry", image: cherry, title: "Cherry Blossom", price: "$295" },
    { id: "peacock", image: peacock, title: "Majestic Peacock", price: "$380" },
  ];

  return <ProductSlider products={products} />;
}
