import Link from "next/link";
import Title from "./title";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { ProductType } from "@/app/types";

const ProductCard = ({ id, name, price, imageUrl }: ProductType) => {
  return (
    <div>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img width={215} height={215} src={imageUrl} alt="product" />
        </div>
      </Link>

      <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

      <p className="text-sm text-gray-400">Ципленок, Моцарелла, тесто</p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-[20px]">
          от <b>{price} ₽</b>
        </span>

        <Button variant="secondary" className="text-base font-bold">
          <Plus size={20} className="mr-1" />
          Добавить
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
