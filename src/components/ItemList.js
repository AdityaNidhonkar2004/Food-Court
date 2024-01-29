import { IMG_CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 text-left  border-gray-400 border-b-2"
        >
          <div className=" flex justify-between">
            <div className="">
              <h2 className="text-ls font-bold">{item?.card?.info?.name}</h2>
              <h2>
                {"Rs " +
                  (item.card.info.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100)}
              </h2>
              <p classname="text-ls">{item?.card?.info?.description}</p>
            </div>
            <div className="w-4/12 p-4">
              <img
                className="w-full"
                src={IMG_CDN_URL + item?.card?.info?.imageId}
              ></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
