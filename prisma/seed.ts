import { hashSync } from "bcrypt";
import { prisma } from "./prisma-client";
import { _ingredients, categories, products } from "./constants";
import { Prisma } from "@prisma/client";

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
  productid,
  pizzaType,
  size,
}: {
  productid: number;
  pizzaType?: number;
  size?: number;
}) => {
  return {
    productid,
    price: randomDecimalNumber(190, 600),
    pizzaType,
    size,
  } as Prisma.ProductItemUncheckedCreateInput;
};

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.log(e);
  }
}
async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "Ибрагим Барашников",
        email: "ibragim@mail.ru",
        password: hashSync("11111", 10),
        verified: true,
        role: "USER",
      },
      {
        fullName: "Кира Ливенцова",
        email: "luna@mail.ru",
        password: hashSync("12345678", 10),
        verified: true,
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({ data: categories });

  await prisma.ingredient.createMany({ data: _ingredients });

  await prisma.product.createMany({ data: products });

  const pizza1 = await prisma.product.create({
    data: {
      name: "Сырный цыпленок",
      categoryid: 1,
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
      ingredients: {
        connect: _ingredients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: "Двойной цыпленок",
      categoryid: 1,
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
      ingredients: {
        connect: _ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: "Ветчина и сыр",
      categoryid: 1,
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif",

      ingredients: {
        connect: _ingredients.slice(10, 15),
      },
    },
  });

  const productItemsFromProducts = products.map((element, id) =>
    generateProductItem({ productid: id + 1 })
  );

  await prisma.productItem.createMany({
    data: [
      ...productItemsFromProducts,
      {
        productid: pizza1.id,
        price: 300,
        pizzaType: 1,
        size: 30,
      },
      {
        productid: pizza1.id,
        price: 350,
        pizzaType: 1,
        size: 40,
      },
      {
        productid: pizza1.id,
        price: 320,
        pizzaType: 2,
        size: 30,
      },
      {
        productid: pizza1.id,
        price: 380,
        pizzaType: 2,
        size: 40,
      },
      {
        productid: pizza2.id,
        price: 305,
        pizzaType: 1,
        size: 30,
      },
      {
        productid: pizza2.id,
        price: 355,
        pizzaType: 1,
        size: 40,
      },
      {
        productid: pizza2.id,
        price: 325,
        pizzaType: 2,
        size: 30,
      },
      {
        productid: pizza2.id,
        price: 385,
        pizzaType: 2,
        size: 40,
      },
      {
        productid: pizza3.id,
        price: 309,
        pizzaType: 1,
        size: 30,
      },
      {
        productid: pizza3.id,
        price: 359,
        pizzaType: 1,
        size: 40,
      },
      {
        productid: pizza3.id,
        price: 329,
        pizzaType: 2,
        size: 30,
      },
      {
        productid: pizza3.id,
        price: 389,
        pizzaType: 2,
        size: 40,
      },
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userid: 1,
        totalAmount: 0,
        token: "11111",
      },
      {
        userid: 2,
        totalAmount: 0,
        token: "222222",
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
}

main().then(async () => {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
});
