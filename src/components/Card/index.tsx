"use client";

import { CardStyle } from "./styles";

interface CardProps {
  title: string;
  text: string;
  img: string;
  altImg?: string;
  author: string;
}

export function Card({ title, text, img, altImg, author }: CardProps) {
  return (
    <CardStyle>
      <figure>
        <img src={img} alt={altImg} />
      </figure>
      <h3>{title}</h3>
      <p>{text.substring(0, 120)}...</p>

      <p>{author}</p>
    </CardStyle>
  );
}
