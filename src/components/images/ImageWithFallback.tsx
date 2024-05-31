import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

type ImageWithFallback = ImageProps & {
  fallbackSrc: string;
};

const ImageWithFallback = (props: ImageWithFallback) => {
  const { src, fallbackSrc = "/placeholder.webp", ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

export default ImageWithFallback;
