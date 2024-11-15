import Container from "@/components/shared/Container";
import Filters from "@/components/shared/Filters";
import ProductsGroupList from "@/components/shared/ProductsGroupList";
import Title from "@/components/shared/title";
import TopBar from "@/components/shared/TopBar";

export default function Home() {
  return (
    <>
      <Container className="mt-8">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-24">
              <ProductsGroupList
                title={"Пиццы"}
                items={[
                  {
                    id: "123",
                    name: "Сырный цыпленок",
                    price: 395,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                  },
                  {
                    id: "1453",
                    name: "Двойной цыпленок",
                    price: 499,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
                  },
                  {
                    id: "342",
                    name: "Ветчина и сыр",
                    price: 395,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif",
                  },
                  {
                    id: "567",
                    name: "Чоризо фреш",
                    price: 405,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                  },
                  {
                    id: "645",
                    name: "Диабло",
                    price: 649,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif",
                  },
                  {
                    id: "986",
                    name: "Двойная пепперони",
                    price: 599,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF8537F2244E8CAEB7C69E644D0537.avif",
                  },
                ]}
                categoryId={0}
              />
              <ProductsGroupList
                title={"Комбо"}
                items={[
                  {
                    id: "938",
                    name: "Комбо Леди Баг и Супер-Кота",
                    price: 519,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF81834A57C5168C3393339EF5A3ED.avif",
                  },
                  {
                    id: "8493",
                    name: "Комбо завтрак на двоих",
                    price: 699,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF112C05B1B9C193648449783C1A82.avif",
                  },
                  {
                    id: "9835",
                    name: "Четыре в одном",
                    price: 789,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEB0721E536EECA59C7BE93DC7E723.avif",
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title={"Закуски"}
                items={[
                  {
                    id: "fldsfk2",
                    name: "Дэнвич ветчина и сыр",
                    price: 269,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.avif",
                  },
                  {
                    id: "fldsfk0",
                    name: "Дэнвич чоризо барбекю",
                    price: 269,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE796FF041FE1F94C903576DCFD01E.avif",
                  },
                  {
                    id: "fl0dsfk2",
                    name: "Супермясной Додстер",
                    price: 259,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE797022F9AD72AC34E1B01DC6AEBA.avif",
                  },
                  {
                    id: "fl0dsfkef",
                    name: "Додстер с ветчиной",
                    price: 249,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7970259D888E98B6407EE6B994D9.avif",
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
