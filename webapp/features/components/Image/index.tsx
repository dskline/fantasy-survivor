import React from "react";

import NextImage, { ImageProps } from "next/future/image";

type Props = ImageProps & {
  options?: string;
};
const Image = (props: Props) => {
  const { src, alt, width, height, options, ...rest } = props;

  const optionsArray = options ? options.split(",") : [];
  if (width) {
    optionsArray.push(`w_${width}`);
  }
  if (height) {
    optionsArray.push(`h_${height}`);
  }

  const url = `https://res.cloudinary.com/frontendlive/image/upload${
    optionsArray ? "/" + optionsArray.join(",") : ""
  }/cloudydesktop/fantasy/${src}.png`;

  return (
    <NextImage
      src={url}
      alt={alt || ""}
      width={width}
      height={height}
      {...rest}
    />
  );
};
export default Image;
