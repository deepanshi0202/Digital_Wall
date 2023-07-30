import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import DialogElement from "./components/Dialog";
// import BoardCard from "./components/BoardCard";
import FullScreenDialog from "./components/FullScreenDialog";
import { Card } from "@mui/material";
import BoardCard from "./components/BoardCard";
import { Grid } from "@mui/material";

function App() {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [board, setBoard] = useState([]);
  const [visibleBoards, setVisibleBoards] = useState([]);
  const [currentBoard, setCurrentBoard] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    setVisibleBoards(board);
    if (searchQuery.length) {
      const vis = board.filter((el) => {
        return el.name.toLowerCase().includes(searchQuery.toLowerCase());
      });
      setVisibleBoards(vis);
    }
  }, [searchQuery, board, visibleBoards]);
  const mapped = (element) => {
    return (
      <Grid item xs={4}>
        <BoardCard
          element={element}
          setCurrentBoard={setCurrentBoard}
          setOpenDialog={setOpenDialog}
        />
      </Grid>
    );
  };
  return (
    <div>
      <Navbar
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        open={open}
        setOpen={setOpen}
      />
      <div className="body">
        <Grid container columnSpacing={2}>
          {visibleBoards.map(mapped)}
        </Grid>
      </div>
      <DialogElement open={open} setBoard={setBoard} setOpen={setOpen} />
      <FullScreenDialog
        currentBoard={currentBoard}
        setOpenDialog={setOpenDialog}
        openDialog={openDialog}
      />
    </div>
  );
}

export default App;
