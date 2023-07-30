import React from "react";
import "./navbar.css";
import { TextField, Button, InputAdornment } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = (props) => {
  const handleClick = () => {
    props.setOpen(true);
  };
  const { searchQuery, setSearchQuery } = props;
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <div className="navbar">
      <div className="flex-start">
        <div className="logo">Digital Wall</div>
      </div>
      <div className="flex-end">
        <TextField
          value={searchQuery}
          onChange={handleSearch}
          style={{ width: "300px" }}
          id="input-with-icon-textfield"
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <Button
          style={{
            height: "55px",
            marginLeft: "80px",
            padding: "16.5px 14px",
          }}
          variant="contained"
          color="error"
          onClick={handleClick}
          startIcon={<AddIcon />}>
          Create new board
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
