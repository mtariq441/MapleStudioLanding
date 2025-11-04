import BiographySection from "../BiographySection";
import artistPhoto from "@assets/generated_images/Artist_portrait_studio_photo_ea6d82fe.png";

export default function BiographySectionExample() {
  const biography = [
    "Megan Reiniger is a passionate artist whose work bridges the gap between imagination and the natural world. With over 15 years of experience in watercolor and botanical illustration, she has developed a distinctive style that celebrates nature's inherent beauty.",
    "Each piece begins with careful observation and sketches from nature, then transforms through Megan's artistic vision into works that capture not just what she sees, but what she feels. Her studio, nestled in the countryside, serves as both workshop and sanctuary.",
    "Megan's art has been featured in galleries across the country and graces the homes of collectors who appreciate the delicate balance of technical skill and emotional resonance in her work.",
  ];

  return (
    <BiographySection
      artistName="Megan Reiniger"
      artistPhoto={artistPhoto}
      biography={biography}
    />
  );
}
