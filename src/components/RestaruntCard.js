import {CDN_URL} from "../../utils/constants"
const RestaruntCard = (props) => {
  console.log(props);
  // const {objdata} = props;
  const { name, cuisines, avgRatingString } = props.data;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src= {CDN_URL}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>5.8</h4>
    </div>
  );
};

export default RestaruntCard;