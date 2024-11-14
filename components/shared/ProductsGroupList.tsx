import { ProductType } from "@/app/types";
import ProductCard from "./ProductCard";
import Title from "./title";

interface Props {
  title: string;
  items: ProductType[];
  categoryId: number;
  className?: string;
}
const ProductsGroupList = ({ className, title, items }: Props) => {
  return (
    <div className={className}>
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
