import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, img, description, price } = service;
  const navigate = useNavigate();

  const navigateToServiceDetail = (id) => {
    navigate("/checkout");
    // navigate(`/service/${id}`);
  };
  return (
    // <div className="service">
    //   <img className="w-100" src={img} alt="" />
    //   <h2>{name}</h2>
    //   <p>Price: {price}</p>
    //   <p>
    //     <small>{description}</small>
    //   </p>
    //   <Button className="btn btn-warning">Make Appointment: {name}</Button>
    //   {/* <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Book: {name}</button> */}
    // </div>
    <div className="g-1 col-sm-12 col-md-6 col-lg-4">
      <div className="card" style={{ width: "25rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price: Tk {price}</p>
          <p className="card-text">{description}</p>
          <a
            href="#"
            onClick={() => navigateToServiceDetail(id)}
            className="btn btn-warning"
          >
            Make Appointment: {name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Service;
