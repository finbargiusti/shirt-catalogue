import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./Card.css";
import { Badge } from "@material-ui/core";

const ItemCard = ({ id, name, imgUrl, price, is_sale, openInfo }) => {
  const triggerOpenInfo = () => {
    openInfo(id);
  };
  return (
    <Card className="cardWrap" onClick={triggerOpenInfo}>
      <CardMedia title={name} image={imgUrl} className="cardImage" />
      <CardActionArea className="cardAction">
        <CardContent>
          <Badge badgeContent="Sale" invisible={!is_sale} color="error">
            <Typography gutterBottom variant="h6" component="h2">
              {name}
            </Typography>
          </Badge>
          <Typography gutterBottom variant="subtitle2">
            {"£" + price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;
