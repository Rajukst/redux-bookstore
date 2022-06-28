import React from "react";
import { Container, Card, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToReadingList } from "../../Redux/Action/bookAction";
const SingleBook = ({ myData }) => {
  const { _id, title, author, coverImageUrl, synopsis } = myData;

  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={coverImageUrl} className="img-fluid" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Title>{author}</Card.Title>
            <Card.Text>
             {synopsis.slice(0,200)}
            </Card.Text>
           <button>Add </button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default SingleBook;
