import * as React from "react";
import { Button, Dialog, IconButton, Slide, Grid } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CloseIcon from "@mui/icons-material/Close";
import { Add } from "@mui/icons-material";
import PostDialog from "./PostDialog";
import Elements from "./Elements";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [cardList, setCardList] = React.useState([]);
  const [bookList, setBookList] = React.useState([]);
  React.useEffect(() => {
    console.log(bookList);
  }, [bookList]);
  const handleClickOpen = () => {
    props.setOpenDialog(true);
  };

  const handleClose = () => {
    props.setOpenDialog(false);
  };
  const handleClick = () => {
    setOpen(true);
  };
  const mapped = (element) => {
    if (element.currentBoard === props.currentBoard)
      return (
        <Grid item xs={4}>
          <Elements
            bookList={bookList}
            setBookList={setBookList}
            element={element}
          />
        </Grid>
      );
  };
  const [bookmark, setBookmark] = React.useState(false);
  const handleBookmark = () => {
    console.log(bookList);
    console.log(cardList);
    setBookmark(!bookmark);
  };
  return (
    <div>
      <Dialog
        fullScreen
        open={props.openDialog}
        onClose={handleClose}
        TransitionComponent={Transition}>
        <IconButton
          style={{ position: "fixed", top: "0", right: "0" }}
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close">
          <CloseIcon />
        </IconButton>
        <div className="dialog">
          <div className="dialogHeader">
            <div className="dialogHeading">Your Posts</div>
            <IconButton
              aria-label="delete"
              size="small"
              onClick={handleBookmark}>
              {!bookmark ? (
                <BookmarkBorderIcon fontSize="large" />
              ) : (
                <BookmarkIcon fontSize="large" />
              )}
            </IconButton>
            <Button
              style={{
                height: "55px",
                marginLeft: "80px",
                padding: "16.5px 14px",
              }}
              variant="contained"
              color="error"
              onClick={handleClick}
              startIcon={<Add />}>
              Create new post
            </Button>
          </div>
        </div>
        <div className="elementContainer">
          <Grid container columnSpacing={2}>
            {!bookmark ? cardList.map(mapped) : bookList.map(mapped)}
          </Grid>
        </div>
        <PostDialog
          open={open}
          currentBoard={props.currentBoard}
          setCardList={setCardList}
          setOpen={setOpen}
        />
      </Dialog>
    </div>
  );
}
