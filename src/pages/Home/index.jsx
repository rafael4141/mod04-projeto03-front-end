import axios from "axios";
import React, { useState } from "react";
import Card from "../../components/structure/Card";

export default function Home() {
  const [videoCards, setVideoCards] = useState([]);
  const getVideoCards = async () => {
    const videoCards = await axios.get("/find-all");
    setVideoCards(videoCards);
  };

  if (videoCards.length === 0) {
    getVideoCards();
  }
  return (
    <>
    <h1></h1>
      {videoCards.map((videoCard) => {
        <Card
          id={videoCard.id}
          name={videoCard.name}
          price={videoCard.price}
        />;
      })}
    </>
  );
}
