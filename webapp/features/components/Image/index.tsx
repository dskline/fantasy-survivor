import React from "react";

import NextImage, { ImageProps } from "next/image";

type Props = ImageProps;
const Image = (props: Props) => {
  const { src, ...rest } = props;
  return (
    <NextImage
      src={
        "https://res.cloudinary.com/frontendlive/image/upload/cloudydesktop/fantasy/" +
        src + ".png"
      }
      {...rest}
    />
  );
};
export default Image;
