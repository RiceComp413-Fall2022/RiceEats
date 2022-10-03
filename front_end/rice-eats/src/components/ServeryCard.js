import React from 'react';
import Button from "./Button";
import Card from "./Card";
import Text from "./Text";
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%"
      }}>
        <div style={{marginBottom: 10}}>
          <Text large={true} bold={true}>
            {name} ({overallRating}⭐)
          </Text>
          {menuItems.map((menuItem) => MenuItem(menuItem))}
        </div>
        
        <Button>
          <Text white={true} bold={true}>
            SEE MORE
          </Text>
        </Button>
      </div>
    </Card>
  );
}