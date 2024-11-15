"use client";
import { ProductType } from "@/app/types";
import ProductCard from "./ProductCard";
import Title from "./title";
import { useIntersection } from "react-use";
import { useEffect, useRef } from "react";
import { useCategoryStore } from "@/app/categorySlice";

interface Props {
  title: string;
  items: ProductType[];
  categoryId: number;
  className?: string;
}
const ProductsGroupList = ({ className, title, items, categoryId }: Props) => {
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });
  const { setActiveId } = useCategoryStore();

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, setActiveId, title]);
  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className="grid grid-cols-3 gap-[50px]">
        {items?.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ProductsGroupList;
