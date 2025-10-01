import { CDN_URL } from "../../utils/constants";

const RestaruntCard = (props) => {
  console.log(props);
  // const {objdata} = props;
  const {
    name,
    cuisines,
    avgRatingString,
    cloudinaryImageId,
    costForTwo,
    deliveryTimeString,
    areaName,
    offers,
  } = props.data;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          alt={name}
          src={cloudinaryImageId ? `${CDN_URL}${cloudinaryImageId}` : CDN_URL}
        />
        {offers && offers !== "No offers" && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
            <p className="text-white font-bold text-sm">{offers}</p>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 truncate mb-2">
          {name}
        </h3>

        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold">
            <span>⭐</span>
            <span className="ml-1">{avgRatingString}</span>
          </div>
          {deliveryTimeString && (
            <span className="text-gray-600 text-sm">
              • {deliveryTimeString}
            </span>
          )}
        </div>

        <h4 className="text-gray-600 text-sm truncate mb-2">
          {cuisines.join(", ")}
        </h4>

        <div className="flex items-center justify-between text-sm">
          {costForTwo && (
            <span className="text-gray-700 font-medium">{costForTwo}</span>
          )}
          {areaName && (
            <span className="text-gray-500 truncate ml-2">{areaName}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaruntCard;
