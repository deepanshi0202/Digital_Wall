import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Dialog } from "@mui/material";
import "./dialog.css";

const DialogElement = (props) => {
  const { currentBoard } = props;
  const handleClose = () => {
    props.setOpen(false);
  };
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [data, setData] = useState({
    subject: "",
    description: "",
  });
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
    console.log(event.target.files[0]);
    setImageUrl(URL.createObjectURL(event.target.files[0]));
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleClick = () => {
    console.log(data);
    console.log(image);
    const newList = {
      data,
      imageUrl,
      currentBoard,
    };
    props.setCardList((prev) => {
      return [...prev, newList];
    });
    setData({
      subject: "",
      description: "",
    });
    setImage("");
    setImageUrl("");
    // const formData = new FormData();
    // formData.append("fileupload", image);

    // fetch("/public/images/", {
    //   method: "POST",

    //   body: formData,
    //   dataType: "jsonp",
    // });
    props.setOpen(false);
  };
  return (
    <div className="postDialog">
      <Dialog open={props.open} onClose={handleClose}>
        <div className="dialogHeading">Create a post</div>
        <TextField
          value={data.subject}
          name="subject"
          onChange={handleChange}
          id="input-with-icon-textfield"
          placeholder="Subject"
          variant="outlined"
          // style={{ width: "500px" }}
        />
        {imageUrl.length ? (
          <img src={imageUrl} alt="selected image" className="selectedImage" />
        ) : null}
        <input type="file" name="image" id="" onChange={handleImageChange} />
        <div className="dialogHeading">What's on your mind</div>
        <TextField
          value={data.description}
          name="description"
          onChange={handleChange}
          id="input-with-icon-textfield"
          placeholder="Description"
          variant="outlined"
          // style={{ width: "500px" }}
        />
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
