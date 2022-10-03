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
  const mapUrl = props.mapUrl;
  const moveToTop = props.moveToTop ?? (() => undefined);
  const isTop = props.isTop;

  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate(url);
  }
  const onMoveToTopClick = () => {
    navigate("https://github.com/RiceComp413-Fall2022/RiceEats");
  }

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
            {name} ({overallRating}⭐)
          </Text>
          {menuItems.map((menuItem) => MenuItem(menuItem))}
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
                  <i class="bi bi-arrow-bar-up" />
                </Text>
              </Button>
            </div>
          )}

          <div style={{marginLeft: 5}}>
            <a href={mapUrl} target="_blank">
              <Button>
                <Text white bold>
                  <i class="bi bi-geo-alt" />
                </Text>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}