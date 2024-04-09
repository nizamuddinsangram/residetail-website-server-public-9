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
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
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
