import { Link } from "react-router-dom";
const EstateCard = ({ card }) => {
  const {
    id,
    estate_title,
    area,
    description,
    facilities,
    location,
    price,
    segment_name,
    status,
  } = card;

  return (
    <div>
      <p className="text-xl">estate card {id}</p>
      <Link to={`/details/${id}`} className="btn btn-accent text-white">
        View Property
      </Link>
    </div>
  );
};

export default EstateCard;
