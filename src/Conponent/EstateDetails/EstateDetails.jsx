import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
  const LoadedSingleData = useLoaderData();
  const { id } = useParams();

  const singleData = LoadedSingleData?.find((data) => data.id == id);

  return (
    <div>
      <p className="text-xl">details{singleData?.id}</p>
    </div>
  );
};

export default EstateDetails;
