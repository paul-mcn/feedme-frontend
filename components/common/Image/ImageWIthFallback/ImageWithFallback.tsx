import React, { useEffect, useState } from "react";
import Image, { ImageLoaderProps, ImageProps } from "next/image";
import PropTypes from "prop-types";

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc: string;
}

const ImageWithFallback = (props: ImageWithFallbackProps) => {
  const { src, fallbackSrc, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  // update the image src if a new src is supplied. e.g. first src is undefined but then later its defined
  // without this the fallback image will always be selected if the initial component render has a bad src
  useEffect(() => {
    if (src !== imgSrc) {
      setImgSrc(src);
    }
  }, [src]);

  const loader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <Image
      {...rest}
      loader={loader}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

ImageWithFallback.defaultProps = {
  fallbackSrc: "/image/image-not-found.png",
};

export default ImageWithFallback;
