import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function View() {
  const id = useParams().id;
  const [videoCard, setVideoCard] = useState([]);

  const car = async (event) => {
    if (event.target.checked) {
      await axios
        .patch(`/user/addList/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((response) => alert("movie marked as watched successfully"));
    } else {
      await axios
        .patch(`/user/addList/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((response) =>
          alert("movie removed from as successfully watched")
        );
    }
  };

  const getVideoCards = async () => {
    const videoCards = await axios.get(`/video-card/find-unique/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).data;
    setVideoCard(videoCards);
  };

  if (videoCard.length === 0) {
    getVideoCards();
  }

  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="card text-white bg-dark mb-3">
            <img
              src={videoCard.photoURL}
              class="card-img-top"
              alt={videoCard.name}
            />
            <div className="card-body">
              <h5 className="card-title">Name:</h5>
              <p className="card-text">{videoCard.name}</p>

              <h5 className="card-title">Description:</h5>
              <p className="card-text">{videoCard.description}</p>
              <h5 className="card-title">Vram:</h5>
              <p className="card-text">{videoCard.vram}</p>
              <h5 className="card-title">Memory Type:</h5>
              <p className="card-text">{videoCard.memory_type}</p>
              <h5 className="card-title">Release Year:</h5>
              <p className="card-text">{videoCard.release_year}</p>
              <h5 className="card-title">
                car: <input onChange={car} type="checkbox" />{" "}
              </h5>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
