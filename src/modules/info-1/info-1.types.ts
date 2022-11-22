import React from "react";
import { ImageType } from "../../types";

export interface Info1Type {
  title: string;
  body: string;
  image: ImageType;
  list: {
    title: string;
    body: string;
    icon: ImageType;
  }[];
}
