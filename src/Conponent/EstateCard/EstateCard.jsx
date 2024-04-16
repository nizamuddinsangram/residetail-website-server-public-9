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
    image,
  } = card;

  return (
    <div className="">
      <div className="card w-11/12 mt-6 mb-6 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" className="h-96	 w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{estate_title}</h2>
          <p>{description}</p>
          <div className="flex justify-between  items-center">
            <p className="">
              Status:{" "}
              <span className="bg-rose-300  px-2 rounded-lg">{status}</span>
            </p>
            <p>{price}</p>
          </div>
          <div className="card-actions ">
            <Link to={`/details/${id}`} className="btn btn-accent text-white">
              View Property
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
