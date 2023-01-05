import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
} from "@mui/material";

function MealCard({ category, description, image }) {
  return (
    <Card
      sx={{
        display: "flex",
        width: "30%",
        borderRadius: "10px",
        boxShadow:
          "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="breakfast food items"
        />
        <CardContent>
          <Typography
            variant="h3"
            fontWeight="800"
            fontSize="1rem"
            color="#192F60"
          >
            {category}
          </Typography>
          <Typography variant="body1" color="#8C96AB">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MealCard;
