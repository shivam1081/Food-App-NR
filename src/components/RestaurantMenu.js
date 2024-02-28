import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
useParams;

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  // console.log("Cards menu", resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

  console.log(itemCards);

  const categories =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c) =>
      c.card?.card?.["@type"].includes(
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );
  console.log("Card Cat", categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>

      {/* Categories Accodion */}

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex && true}
          setShowIndex={() =>
            showIndex === index ? setShowIndex(null) : setShowIndex(index)
          }
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
