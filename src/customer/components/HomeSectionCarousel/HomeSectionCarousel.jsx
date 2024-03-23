import React, { useState } from "react";
import HomeSectionCards from "../HomeSectionCards/HomeSectionCards";
import AliceCarousel from "react-alice-carousel";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { mens_kurta } from "../../../Data/mens_kurta";

const HomeSectionCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const slidePrev = () => {
    setActiveIndex(activeIndex - 1);
  };
  const slideNext = () => setActiveIndex(activeIndex + 1);

  const syncActiveIndex = ({ item }) => {
    console.log("Syncing active index to:", item);
    setActiveIndex(item);
  };

  const items = mens_kurta.slice(0, 10).map((item) => (
    <div>
      <HomeSectionCards product={item} />
    </div>
  ));

  return (
    <div className="border">
      <div className="relative p-5">
        <AliceCarousel
          disableButtonsControls
          disableDotsControls
          items={items}
          activeIndex={activeIndex}
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translate(50%) rotate(90deg)",
              bgcolor: "white",
            }}
          >
            <KeyboardArrowLeftIcon
              sx={{
                transform: "rotate(90deg)",
                color: "black",
              }}
            />
          </Button>
        )}

        <Button
          variant="contained"
          className="z-50 bg-white"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translate(-50%) rotate(-90deg)",
            bgcolor: "white",
          }}
        >
          <KeyboardArrowLeftIcon
            sx={{
              transform: "rotate(90deg)",
              color: "black",
            }}
          />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
