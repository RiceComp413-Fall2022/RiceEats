import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from "./Card"
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
  const backgroundColor = props.backgroundColor;
  const url = props.url;
  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate(url);
  }
  return (
    <Card onClick={onButtonClick} backgroundColor={backgroundColor}>
      <div style={{
        fontWeight: "bold"
      }}>{name} ({overallRating}⭐)</div>
      <div>
        {menuItems.map((menuItem) => MenuItem(menuItem))}
      </div>
    </Card>
  );
}