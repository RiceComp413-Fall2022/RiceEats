import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function MenuItem(props) {
  const name = props.name;
  const rating = props.rating;
  return (
    <div>
      {name} ({rating})
    </div>
  )
}

export default function ServeryCard(props) {
  const name = props.name;
  const overallRating = props.overallRating;
  const menuItems = props.menuItems;
  const url = props.url;
  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate(url);
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name} ({overallRating})</Card.Title>
        <Card.Text>
          <div>
            {menuItems.map((menuItem) => MenuItem(menuItem))}
          </div>
        </Card.Text>
        <Button variant="primary" onClick={onButtonClick}>See More Details</Button>
      </Card.Body>
    </Card>
  );
}