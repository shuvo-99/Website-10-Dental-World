import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import drums from "./drums.jfif";
import CardGroup from "../CardGroup/CardGroup";
import homereviewInfo from "../hooks/homereviewInfo";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [reviewdatas, setreviewdata] = homereviewInfo();

  return (
    <div>
      {/* <div className="Container">
        <div classname="Row">
          <div className="COl">1 of 2</div>
          <div className="COl">2 of 2</div>
        </div>
      </div> */}
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col>
            <h1>Welcome to drum world!!</h1>
            <p>
              Find all kinds of drums and instument here all at once. We provide
              the best drums to enrich your music.
            </p>
          </Col>
          <Col>
            <img src={drums} className="img-fluid" alt="" />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <h1>Customer Reviews</h1>
      <br />
      <div className="homereviewContainer">
        {reviewdatas.map((reviewdata) => (
          // console.log(reviewdata)
          <CardGroup key={reviewdata.id} reviewdata={reviewdata}></CardGroup>
        ))}
      </div>
      <br />
      <div>
        <nav>
          <Link to="/Review">
            <Button variant="danger">See All Reviews</Button>
          </Link>
        </nav>
      </div>
      <br />
    </div>
  );
};

export default Home;
