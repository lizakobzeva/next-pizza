"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface Props {
  className?: string;
}

const cats = [
  "Пиццы",
  "Комбо",
  "Закуски",
  "Коктейли",
  "Кофе",
  "Напитки",
  "Десерты",
];

const Categories = ({ className }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {cats.map((cat, index) => (
        <a
          key={cat}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeIndex === index &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          onClick={() => setActiveIndex(index)}
        >
          <button>{cat}</button>
        </a>
      ))}
    </div>
  );
};

export default Categories;
