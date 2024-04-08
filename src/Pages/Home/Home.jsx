import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../../Conponent/Banner/Banner";
import EstateCard from "../../Conponent/EstateCard/EstateCard";
const Home = () => {
  const cardData = useLoaderData();
  const [cards, setCards] = useState(cardData);

  return (
    <div>
      <Banner />
      <div className="grid grid-cols-3">
        {cards?.map((card) => (
          <EstateCard
            key={card.id}
            setCards={setCards}
            card={card}
          ></EstateCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
