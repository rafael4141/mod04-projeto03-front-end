import axios from "axios";
import React, { useState } from "react";
import Card from "../../components/structure/Card";
{
  /* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-dash" viewBox="0 0 16 16">
  <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg> */
}

{
  /* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg> */
}

{
  /* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg> */
}

export default function Profile() {
  const [user, setUser] = useState([]);
  const [videoCards, setVideoCards] = useState([]);
  const getUser = async () => {
    const user = await axios.get("/auth/profile", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setUser(user);
  };
  const getVideoCards = async () => {
    let videoCards = await axios.get("/user/seeList", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    if (videoCards.length === 0) {
      setVideoCards("You don't have any video cards in your cart");
    } else {
      videoCards = videoCards.map((videoCard) => {
        <Card
          id={videoCard.id}
          name={videoCard.name}
          price={videoCard.price}
        />;
      })
      setVideoCards(videoCards);
    }
  };
  if (user.length === 0) {
    getUser();
  }
  if (videoCards.length === 0) {
    getVideoCards();
  }
  return (
    <>
      <main className="container-fluid">
        <h1>Hello {user.name}</h1>
        {/* <p>change data</p> */}
        <h2>Your videos cards:</h2>
        {videoCards}
      </main>
    </>
  );
}
