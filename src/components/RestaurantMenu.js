// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
// import { MENU_API } from "../utils/constants";
import { MENU_IMG_LINK } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();
  //Custom-Hook
  const resInfo = useRestaurantMenu(resId);

  // const [resInfo, setresInfo] = useState(null);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   console.log(json);
  //   setresInfo(json.data);
  // };
  console.log(resInfo);
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
  const { name, cuisines, cloudinaryImageId, costForTwoMessage, avgRating } =
    resInfo?.cards[0]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};
  // console.log(itemCards);
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="menu-card mt-40 ">
      <div className="menu-des  bc-white hover:bg-gray-200  flex items-center border-2 justify-center rounded-lg p-2 space-x-8 mx-40 shadow-xl">
        <div className="leading-loose">
          <h2 className="text-xl font-extrabold">{name}</h2>
          <h2 className="tracking-widest">{cuisines.join(",")}</h2>
          <h2 className="tracking-wider">{costForTwoMessage}</h2>
          <button className="rating">{avgRating}</button>
        </div>
        <img
          className="menu-image  rounded-xl  "
          src={MENU_IMG_LINK + cloudinaryImageId}
        ></img>
      </div>
      <div className=" ">
        <h2 className="menu justify-center font-extrabold mb-4 ">Menu</h2>
        <div className="">
          <p>
            {categories.map((category) => (
              <RestaurantCategory
                key={category?.card?.card?.title}
                data={category?.card?.card}
              />
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenu;

{
  /* <ul>
            {itemCards?.map((item) => (
              <li key={item.card.info.id}>
                <h3>
                  {" "}
                  {item.card.info.name}-{item.card.info.price / 100}
                </h3>
              </li>
            ))}
          </ul> */
}
