import { ImageType } from "../types";

// get placeholder image from dummy image service
const getPlaceholderImage = (width: number, height: number, background: string, foreground: string, text?: string, extension?: string) => {
  const url = `https://dummyimage.com/${width}x${height}/${background}/${foreground}${extension ? `.${extension}` : ".png"}${text ? `&text=${text}` : ""}`;
  const image: ImageType = {
    src: url,
    width,
    height,
    alt: text || "placeholder image",
    title: text || "placeholder image",
  };

  return image;
};

export default getPlaceholderImage;
