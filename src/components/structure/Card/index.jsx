import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles.css"

export default function Card(props) {
  return (
    <div className="card text-white bg-dark mb-3">
      <Link to={`/video-card/${props.id}`} className="col">
        <img src={props.photoURL} class="card-img-top" alt={props.name} />
      </Link>
      <div className="card-body">
        <h5 className="card-title">Name:</h5>
        <p className="card-text">{props.Name}</p>
        <h5 className="card-title">Price:</h5>
        <span className="badge bg-primary">{props.price}</span>
      </div>
    </div>
  );
}
