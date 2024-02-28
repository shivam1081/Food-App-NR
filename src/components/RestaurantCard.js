import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:shadow-2xl">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg ">{name}</h3>
      <h4 className="py-2">{cuisines.join(", ")}</h4>
      <h4 className="py-2">{avgRating} stars</h4>
      <h4 className="py-2">{costForTwo}</h4>
      <h4 className="py-2">{sla.deliveryTime} minutes</h4>
    </div>
  );
};

// Higher Order Components

// Input - RestaurantCard => RestaurantCard is Open.

export const withIsOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-500 text-white m-2 p-2 rounded-lg">IsOpen</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
