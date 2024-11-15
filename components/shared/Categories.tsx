"use client";
import { useCategoryStore } from "@/app/categorySlice";
import { cn } from "@/lib/utils";
import React from "react";

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
  // const [activeIndex, setActiveIndex] = useState(0);
  const { activeId, setActiveId } = useCategoryStore();
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {cats.map((cat, index) => (
        <a
          key={cat}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeId === index &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          onClick={() => setActiveId(index)}
          href={`/#${cat}`}
        >
          <button>{cat}</button>
        </a>
      ))}
    </div>
  );
};

export default Categories;
