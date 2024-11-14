"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import FilterCheckbox, { FilterCheckboxProps } from "./FilterCheckbox";
import { Input } from "../ui/input";
import { ChevronUp, Frown, Plus } from "lucide-react";

interface Props {
  title: string;
  items: FilterCheckboxProps[];
  defaultItems?: FilterCheckboxProps[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
}
const CheckboxFiltersGroup = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  onChange,
  defaultValue,
  className,
}: Props) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const limitedItems = showAll
    ? items.filter((item) =>
        item.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      )
    : defaultItems?.slice(0, limit);

  return (
    <div className={cn("", className)}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <Input
          value={searchValue}
          placeholder={searchInputPlaceholder}
          className="bg-gray-50 border-none"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      )}

      <div className="mt-5 flex flex-col gap-4 h-40 pr-2 overflow-auto scrollbar ">
        {limitedItems?.length ? (
          limitedItems?.map((item) => (
            <FilterCheckbox key={item.text} {...item} />
          ))
        ) : (
          <p className="flex gap-3">
            Ничего не найдено <Frown />
          </p>
        )}
      </div>
      {showAll ? (
        <p
          className="mt-3 mb-5 flex items-center text-primary cursor-pointer"
          onClick={() => {
            setShowAll(false);
          }}
        >
          <ChevronUp />
          Свернуть
        </p>
      ) : (
        <p
          className="mt-3 mb-5 flex items-center text-primary cursor-pointer"
          onClick={() => {
            setShowAll(true);
          }}
        >
          <Plus />
          Показать еще
        </p>
      )}
    </div>
  );
};

export default CheckboxFiltersGroup;
