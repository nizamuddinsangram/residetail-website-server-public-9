import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
  const LoadedSingleData = useLoaderData();
  const { id } = useParams();

  const singleData = LoadedSingleData?.find((data) => data.id == id);
  console.log(singleData);

  return (
    <div className="flex justify-between items-center w-full h-[67vh]">
      <div className=" w-1/2 h-full">
        <img src={singleData?.image} className="h-full w-full" />
      </div>

      <div className=" w-1/2 h-full  p-6 flex justify-center items-center ">
        <div>
          <h1 className="text-center text-6xl font-bold my-2">
            {singleData?.segment_name}
          </h1>
          <h1 className="text-4xl text-center my-4 font-semibold">
            {singleData?.estate_title}
          </h1>
          <p className="text-2xl font-medium my-4">{singleData?.description}</p>
          <div className="flex justify-between text-3xl my-2">
            <p>Price{singleData?.price}</p>
            <p>status:{singleData?.status}</p>
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
  );
};

export default EstateDetails;
