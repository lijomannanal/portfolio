"use client";
import { useEffect, useState } from "react";

export function useTyping(text: string, speed = 120) {
  const [value, setValue] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setValue((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return { value, loaded: index === text.length };
}
