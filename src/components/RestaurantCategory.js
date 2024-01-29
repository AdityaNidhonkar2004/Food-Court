import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div>
      <div className="w-6/12 m-auto  bg-gray-100 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
