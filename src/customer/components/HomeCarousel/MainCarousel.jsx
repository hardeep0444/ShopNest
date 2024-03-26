import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCarouselData } from "./MainCarouselData";

const MainCarousel = () => {
  const items = MainCarouselData.map((item) => (
    <img
      src={item.image}
      alt=""
      className="cursor-pointer -z-10"
      role="presentation"
    />
  ));
  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      infinite
      autoPlay
      autoPlayInterval={1500}
    />
  );
};
export default MainCarousel;
