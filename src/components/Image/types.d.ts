import React from 'react'

/**
 * TODO: clean up, fill out the rest of the properties, enumify the urlParams, and maybe put in a PR to add
 * react-cloudinary-lazy-image to @DefinitelyTyped
 */
declare type ImageProps = {
  imageName: string,
  alt: string,
  fixed?: {
    width: number,
    height: number
  },
  urlParams?: string,
  useUrlParamsToBlur?: boolean
} & React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;
