import Card from "@mui/material/Card";
import { Rave } from "../data/definitions";
import { RAVES_DATA } from "../data/rave-data-placeholder";
import { Button, CardActionArea, CardActions, CardContent, CardMedia, Link, Typography } from "@mui/material";

export default function displayRaves() {
  const raveData: Rave[] = RAVES_DATA;
  const raveCards = raveData.map(createCard);
  return (
  <div className="grid grid-cols-4 gap-4 grid-auto-flow: row dense">{raveCards}</div>
    );
}

function createCard(cardInfo: Rave) {
  return (
    <div key={cardInfo.name + cardInfo.year}  className="flex flex-col h-full">
      <Card className="flex flex-col h-full">
        <CardMedia component="img" height={140} image={cardInfo.cover} title={cardInfo.name} />
        <CardContent className="flex-grow">
          <Typography align="left" variant="h6" noWrap={true}>
            {cardInfo.name}
          </Typography>
          <Typography align="left" variant="subtitle1">
            {cardInfo.location}
          </Typography>
          <Typography align="left" variant="body2">
            {cardInfo.year}
          </Typography>
        </CardContent>
        <CardActionArea>
          <CardActions>
            <Button>
              <Link href="">Link Place Holder</Link>
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </div>
  );
}
