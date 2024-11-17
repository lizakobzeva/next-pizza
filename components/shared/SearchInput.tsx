"use client";
import { cn } from "@/lib/utils";
import { Api } from "@/services/apiClient";
import { Product } from "@prisma/client";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { useClickAway, useDebounce } from "react-use";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<Product[]>();
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    () => {
      Api.products.search(query).then((res) => setProducts(res));
    },
    100,
    [query]
  );
  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/30 z-30" />
      )}
      <div
        ref={ref}
        className="flex rounded-2xl flex-1 justify-between relative h-11 z-30"
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Найти пиццу..."
          onFocus={() => setFocused(true)}
        />

        <div
          className={cn(
            "absolute w-full bg-white rounded-xl py-2 top-4 shadow-md transition-all duration-200 invisible opacity-0 z-30",
            focused && "visible opacity-100 top-12"
          )}
        >
          {products?.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="flex gap-2 items-center px-3 py-2 hover:bg-primary/10"
              onClick={() => setFocused(false)}
            >
              <img
                src={product.imageUrl}
                alt="pizza"
                className="rounded-sm h-8 w-8"
              />
              <span>{product.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchInput;
