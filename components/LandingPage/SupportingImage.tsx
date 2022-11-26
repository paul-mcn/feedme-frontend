import { ImageWithFallback } from "components/common/Image/ImageWIthFallback";
import * as React from "react";

const SupportingImage = () => {
  return (
    <ImageWithFallback
      src={"/image/hero-image-2.jpg"}
      width="800"
      height={600}
      className="overflow-hidden rounded-r-2xl"
      objectFit={"cover"}
      alt="saturated image of delicious food being enjoyed by a person using chopsticks"
    />
  );
};

export default SupportingImage;
