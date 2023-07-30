import * as React from "react";
import { Card, Typography, CardMedia, CardContent } from "@mui/material";
import { IconButton } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export default function MediaCard(props) {
  const { bookList, setBookList } = props;
  const [bookIcon, setBookIcon] = React.useState(false);
  const handleClick = () => {
    console.log();
    setBookIcon(!bookIcon);
    if (bookList.includes(props.element)) {
      const updated = bookList.filter((el) => {
        return props.element.data.subject != el.data.subject;
      });
      console.log(updated);
      setBookList(updated);
    } else setBookList((prev) => [...prev, props.element]);
  };
  return (
    <Card sx={{ height: "100%", maxWidth: 345 }}>
      <CardContent>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ overflow: "hidden", height: "100%", width: "100%" }}>
            {props.element.data.subject}
          </Typography>
          <IconButton aria-label="delete" size="small" onClick={handleClick}>
            {!bookIcon ? (
              <BookmarkBorderIcon fontSize="small" />
            ) : (
              <BookmarkIcon fontSize="small" />
            )}
          </IconButton>
        </div>
        <CardMedia
          sx={{ height: 140 }}
          image={props.element.imageUrl}
          title="element image"
        />
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ overflow: "hidden", height: "100px", width: "100%" }}>
          {props.element.data.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
