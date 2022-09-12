export const generateImageUrl = (src: string, options?: Array<string>) =>
  `https://res.cloudinary.com/frontendlive/image/upload${
    options ? "/" + options.join(",") : ""
  }/cloudydesktop/fantasy/${src}.png`;
