import { cn } from "@/lib/utils";
import React from "react";
import Title from "./title";
import FilterCheckbox from "./FilterCheckbox";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import CheckboxFiltersGroup from "./CheckboxFiltersGroup";

interface Props {
  className?: string;
}
const Filters = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" />
        <FilterCheckbox text="Новинки" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={3000}
            defaultValue={0}
          />
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={3000}
            defaultValue={0}
          />
        </div>

        {/* <Slider min={0} max={3000} step={10} defaultValue={[0, 3000]} /> */}
      </div>

      <CheckboxFiltersGroup
        title="Ингредиенты:"
        limit={4}
        className="mt-5"
        defaultItems={[
          { text: "Сырный соус" },
          { text: "Моцарелла" },
          { text: "Чеснок" },
          { text: "Соленые огурчики" },
          { text: "Томаты" },
          { text: "Красный лук" },
        ]}
        items={[
          { text: "Сырный соус" },
          { text: "Моцарелла" },
          { text: "Чеснок" },
          { text: "Соленые огурчики" },
          { text: "Томаты" },
          { text: "Красный лук" },
          { text: "Чесночный соус" },
          { text: "Шпроты" },
          { text: "Шоколад" },
          { text: "Зефирки" },
          { text: "Мармелад" },
        ]}
      />

      <p className="mb-5 font-bold mb-3">Тип теста:</p>
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Традиционное" />
        <FilterCheckbox text="Тонкое" />
      </div>

      <Button className="mt-5 w-full">Применить</Button>
    </div>
  );
};

export default Filters;
