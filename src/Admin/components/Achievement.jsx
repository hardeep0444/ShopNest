import {
  Button,
  Card,
  CardContent,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import React from "react";

// Styled component for the triangle shaped background image
const TriangleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});

// Styled component for the trophy image
const TrophyImg = styled("img")({
  right: 36,
  bottom: 20,
  height: 98,
  position: "absolute",
});

const Achievement = () => {
  const theme = useTheme();

  const imageSrc =
    theme.palette.mode === "light" ? "triangle-light.png" : "triangle-dark.png";
  return (
    <Card sx={{ position: "relative" }}>
      <CardContent>
        <Typography variant="h6" sx={{ letterSpacing: "0.25px" }}>
          ShopNest
        </Typography>
        <Typography variant="body2">Congratulations 🥳</Typography>

        <Typography variant="h5" sx={{ my: 3.1, color: "primary.main" }}>
          420.8k
        </Typography>
        <Button size="small" variant="contained">
          View Sales
        </Button>
        <TriangleImg src="" />
        <TrophyImg
          alt="trophy"
          src="https://media.istockphoto.com/id/1168757141/vector/gold-trophy-with-the-name-plate-of-the-winner-of-the-competition.jpg?s=612x612&w=0&k=20&c=ljsP4p0yuJnh4f5jE2VwXfjs96CC0x4zj8CHUoMo39E="
        />
      </CardContent>
    </Card>
  );
};

export default Achievement;
