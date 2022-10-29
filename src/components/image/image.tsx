import React from "react";
import { ImageZod } from "../../types";
import { z } from "zod";

export interface ImageType {
  data?: z.infer<typeof ImageZod>;
  width?: number;
  lazy?: boolean;
  alt?: string;
  className?: string;
  withPlaceholder?: boolean;
}

const Image: React.FC<ImageType> = (props) => {
  if (!props.data) {
    return <div className={props?.className + " bg-gray-100"} />;
  }

  const url = new URL(props?.data.url);
  url.searchParams.append("auto", "format");
  if (props.width) url.searchParams.append("w", `${props.width}`);
  const src = url.toString();

  return (
    <>
      {props?.withPlaceholder && (
        <img
          loading={props.lazy ? "lazy" : "eager"}
          width={props.width}
          className={props?.className}
          src={props.data.metadata.lqip}
          alt={props.alt}
        />
      )}

      <img
        loading={props.lazy ? "lazy" : "eager"}
        width={props.width}
        className={props?.className}
        src={src}
        alt={props.alt}
      />
    </>
  );
};

export default Image;
