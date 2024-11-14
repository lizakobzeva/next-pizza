import React, { ReactNode } from "react";
import { Checkbox } from "../ui/checkbox";

export interface FilterCheckboxProps {
  text: string;
  //   value: string;
  endAdornment?: ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
}
const FilterCheckbox = ({
  text,
  //   value,
  endAdornment,
  onCheckedChange,
  checked,
}: FilterCheckboxProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={text}
        className="rounded-[8px] w-6 h-6"
        id={`checkbox-${String(text)}`}
      />
      <label
        htmlFor={`checkbox-${String(text)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};

export default FilterCheckbox;
