import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
const EstateDetails = () => {
  const LoadedSingleData = useLoaderData();
  const [data, setData] = useState(LoadedSingleData);
  console.log(data);
  const { id } = useParams();
  // const singleData = Array.isArray(data) ? data.find((d) => d.id == id) : null;
  const singleData = data?.find((d) => d.id == id);
  console.log(singleData);
  if (!singleData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Helmet>
        <title>Residential | Details page</title>
      </Helmet>
      <div className="lg:flex  justify-between items-center w-full  lg:h-[67vh]">
        <div className=" lg:w-1/2 h-full">
          <img src={singleData?.image} className="h-[50vh] lg:h-full  w-full" />
        </div>

        <div className=" lg:w-1/2 h-full  p-6 flex justify-center items-center ">
          <div>
            <h1 className="text-center text-6xl font-bold my-2">
              {singleData?.segment_name}
            </h1>
            <h1 className="text-4xl text-center my-4 font-semibold">
              {singleData?.estate_title}
            </h1>
            <p className="text-2xl font-medium my-4">
              {singleData?.description}
            </p>
            <div className="flex justify-between text-3xl my-2">
              <p>Price{singleData?.price}</p>
              <p>Area: {singleData?.area}</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Facilities:</p>
              <span className="flex justify-between text-2xl font-bold my-2">
                {singleData?.facilities.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </span>
            </div>
            <p className="my-2 text-2xl">Location: {singleData?.location}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EstateDetails;
