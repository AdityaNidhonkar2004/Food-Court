import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setresInfo(json.data);
  };
  if (resInfo === null) return <Shimmer />;
  if (
    !resInfo ||
    !resInfo.cards ||
    !resInfo.cards[0] ||
    !resInfo.cards[0].card ||
    !resInfo.cards[0].card.card
  ) {
    return <Shimmer />;
  }
  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};
  // console.log(itemCards);
  return (
    <div className="menu">
      <h2>{name}</h2>
      <h2>{cuisines}</h2>
      <h2>{costForTwoMessage}</h2>
      <img src={cloudinaryImageId}></img>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            <h3>
              {" "}
              {item.card.info.name}-{item.card.info.price / 100}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
