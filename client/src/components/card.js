import React from "react";
import MovieRating from "./rating";
import "../components/css/card.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MovieCard({ movieData }) {
  return (
    <>
      <Row className="card-container g-4">
        {movieData.map((movie) => (
          <Col>
            <Card className="movie-card" key={movie.title}>
              <Card.Img src={movie.image} alt="box-art"></Card.Img>
              <Card.Body className="card-text">
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.rating}</Card.Text>
                <MovieRating movie={movie} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
