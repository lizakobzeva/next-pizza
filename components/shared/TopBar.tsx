import { cn } from "@/lib/utils";
import React from "react";
import Container from "./Container";
import Categories from "./Categories";
import SortPopup from "./SortPopup";

interface Props {
  className?: string;
}

const TopBar = ({ className }: Props) => {
  return (
    <div className={cn("sticky top-0 bg-white py-5  z-10", className)}>
      <Container className="flex items-center justify-between">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};

export default TopBar;
