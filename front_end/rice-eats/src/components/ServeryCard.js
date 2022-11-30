import React from 'react';
import Button from "./Button";
import Card from "./Card";
import Text from "./Text";
import { useNavigate } from "react-router-dom";
import { highlightedDietaryRestrictions, strikethroughDietaryRestrictions } from '../config/config';

export default function ServeryCard(props) {
  const name = props.name;
  const overallRating = props.overallRating;
  const menuItems = props.menuItems;
  const backgroundColor = props.backgroundColor;
  const url = props.url;
  const mapUrl = props.mapUrl;
  const moveToTop = props.moveToTop ?? (() => undefined);
  const isTop = props.isTop;
  const dietaryRestrictions = props.dietaryRestrictions;

  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate(url);
  };

  const isHighlighted = (menuItem) => {
    let result = false;
    console.log(menuItem);
    highlightedDietaryRestrictions.forEach((restriction) => {
      if (menuItem[restriction] && dietaryRestrictions[restriction]) {
        result = true;
      }
      if (menuItem.vegan && dietaryRestrictions.vegetarian) {
        // Edge case: for some reason they don't mark vegan meals as vegetarian
        result = true;
      }
    });
    return result;
  };

  const isStrikethrough = (menuItem) => {
    let result = false;
    strikethroughDietaryRestrictions.forEach((restriction) => {
      if (menuItem[restriction] && dietaryRestrictions[restriction]) {
        result = true;
      }
    });
    return result;
  };

  return (
    <Card backgroundColor={backgroundColor}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%"
      }}>
        <div style={{marginBottom: 10}}>
          <Text large={true} bold={true}>
            {name} {overallRating !== -1 && <>({overallRating}⭐)</>}
          </Text>
          {menuItems.map((menuItem, index) => (
            <div key={index}>
              <Text 
                highlighted={isHighlighted(menuItem)} 
                strikethrough={isStrikethrough(menuItem)}>
                {menuItem.menuItem_id} ({menuItem.rating !== -1 && <>{menuItem.rating}⭐</>}{menuItem.rating === -1 && <>new!</>})
              </Text>
            </div>
          ))}
        </div>
        
        <div style={{
          display: "flex",
          width: "100%"
        }}>
          <div style={{marginLeft: 5, flexGrow: 2}}>
            <Button onClick={onButtonClick}>
              <Text white bold>
                RATE NOW
              </Text>
            </Button>
          </div>

          {!isTop && (
            <div style={{marginLeft: 5}}>
              <Button onClick={moveToTop}>
                <Text white bold>
                  <i className="bi bi-arrow-bar-up" />
                </Text>
              </Button>
            </div>
          )}

          <div style={{marginLeft: 5}}>
            <a href={mapUrl} target="_blank" rel="noreferrer">
              <Button>
                <Text white bold>
                  <i className="bi bi-geo-alt" />
                </Text>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}