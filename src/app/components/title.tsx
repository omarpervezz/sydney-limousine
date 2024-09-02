import React from "react";
import { libreBaskerville } from "@/lib/font";

interface TitleProps {
  text: string;
  className?: string;
}

function Title({ text, className }: TitleProps) {
  return (
    <h2
      className={`${libreBaskerville.className} text-2xl md:text-3xl font-semibold ${className}`}
    >
      {text}
    </h2>
  );
}

export default Title;
