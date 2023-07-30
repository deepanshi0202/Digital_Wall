import React, { useState } from "react";
import { TextField, Radio, RadioGroup, Button } from "@mui/material";
import { Dialog } from "@mui/material";
import "./dialog.css";

const DialogElement = (props) => {
  const handleClose = () => {
    props.setOpen(false);
  };
  const [color, setColor] = useState("a");
  const [boardName, setBoardName] = useState("");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
  const handleClick = () => {
    props.setBoard((prev) => {
      return [
        ...prev,
        {
          name: boardName,
          color: color,
        },
      ];
    });
    props.setOpen(false);
    setBoardName("");
    setColor("a");
  };
  const handleChange = (event) => {
    setBoardName(event.target.value);
  };
  return (
    <div>
      <Dialog open={props.open} onClose={handleClose}>
        <div className="dialogHeading">Add a name for your board</div>
        <TextField
          value={boardName}
          onChange={handleChange}
          id="input-with-icon-textfield"
          placeholder="Board Name"
          variant="outlined"
          // style={{ width: "500px" }}
        />
        <div className="dialogHeading">Select post colour</div>
        <RadioGroup row name="row-radio-buttons-group">
          <Radio
            checked={color === "a"}
            onChange={handleColorChange}
            value="a"
            name="radio-buttons"
            style={{ color: "#a7f0f9" }}
            inputProps={{ "aria-label": "A" }}
          />
          <Radio
            checked={color === "b"}
            onChange={handleColorChange}
            value="b"
            name="radio-buttons"
            style={{ color: "#c5c5fc" }}
            inputProps={{ "aria-label": "B" }}
          />
          <Radio
            checked={color === "c"}
            onChange={handleColorChange}
            value="c"
            name="radio-buttons"
            style={{ color: "#ffaec0" }}
            inputProps={{ "aria-label": "C" }}
          />
          <Radio
            checked={color === "d"}
            onChange={handleColorChange}
            value="d"
            name="radio-buttons"
            style={{ color: "#ffcc66" }}
            inputProps={{ "aria-label": "D" }}
          />
        </RadioGroup>
        <Button
          style={{ marginTop: "20px", borderRadius: "10px", padding: "10px" }}
          variant="contained"
          color="error"
          onClick={handleClick}>
          Create board
        </Button>
      </Dialog>
    </div>
  );
};

export default DialogElement;
