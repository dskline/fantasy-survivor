import React from "react";

import NextImage, { ImageProps } from "next/image";

type Props = ImageProps;
const Image = (props: Props) => {
  const { src, alt, ...rest } = props;
  return (
    <NextImage
      src={
        "https://res.cloudinary.com/frontendlive/image/upload/cloudydesktop/fantasy/" +
        src +
        ".png"
      }
      alt={alt || ""}
      {...rest}
    />
  );
};
export default Image;
