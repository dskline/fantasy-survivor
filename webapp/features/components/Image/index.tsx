import React from "react";

import NextImage, { ImageProps } from "next/image";

import { generateImageUrl } from "@/features/components/Image/generateImageUrl";

type Props = ImageProps & {
  options?: Array<string>;
};
export const Image = (props: Props) => {
  const { src, alt, width, height, options, ...rest } = props;

  const optionsArray = options || [];
  if (width) {
    optionsArray.push(`w_${width}`);
  }
  if (height) {
    optionsArray.push(`h_${height}`);
  }

  return (
    <NextImage
      src={generateImageUrl(src as string, optionsArray)}
      alt={alt || ""}
      width={width}
      height={height}
      {...rest}
    />
  );
};
