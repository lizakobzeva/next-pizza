import { cn } from "@/lib/utils";
import Container from "./Container";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Pizza, ShoppingCart, User } from "lucide-react";

interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-6">
        <div className="flex items-start gap-3">
          <Pizza color="#f97316" strokeWidth={1.5} size="35px" />
          <div>
            <h1 className="font-black text-2xl uppercase">Sirius pizza</h1>
            <p className="text-sm text-gray-400">вкусней уже некуда</p>
          </div>
        </div>
        {/* <Input /> */}
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <User size="16px" />
            Войти
          </Button>
          <div>
            <Button className="group relative">
              <b>520 ₽</b>
              <span className="h-full w-[1px] bg-white/30 mx-3" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart className="relative" size={16} />
                <b>3</b>
              </div>
              <ArrowRight
                size={20}
                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
