import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
const BoardCard = (props) => {
  console.log(props);
  const [bgColor, setBgColor] = useState("#a7f0f9");
  useEffect(() => {
    switch (props.element.color) {
      case "a":
        setBgColor("#a7f0f9");
        break;
      case "b":
        setBgColor("#c5c5fc");
        break;
      case "c":
        setBgColor("#ffaec0");
        break;
      case "d":
        setBgColor("#ffcc66");
        break;
      default:
        setBgColor("#a7f0f9");
        break;
    }
  }, []);
  const handleClick = () => {
    props.setOpenDialog(true);
    props.setCurrentBoard(props.element.name);
  };
  return (
    <div className="boardCard">
      <Card onClick={handleClick}>
        <div
          style={{ background: bgColor, marginRight: "20px" }}
          className="cardColor"></div>
        <div className="cardName dialogHeading">{props.element.name}</div>
      </Card>
    </div>
  );
};

export default BoardCard;
