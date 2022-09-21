import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name} ({overallRating})</Card.Title>
        <Card.Text>
          {menuItems.map((menuItem) => MenuItem(menuItem))}
        </Card.Text>
        <Button variant="primary">See More Details</Button>
      </Card.Body>
    </Card>
  );
}