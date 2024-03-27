import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { StarIcon } from "@heroicons/react/24/outline";
import { deepPurple } from "@mui/material/colors";
import { StarBorder } from "@mui/icons-material";

const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div className="font-bold text-xl py-7">
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>

      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      <Grid className="space-y-5" container>
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://www.realsimple.com/thmb/yla86Nr8GjRXe_9IyADQ638gPrg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fashion-trends-GettyImages-1457816153-d2982e954afe4b42bf5587f087da90d4.jpg"
                  alt=""
                />
                <div className="space-y-2 ml-5">
                  <p className="font-semibold">Product title</p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    <span>Color : pink</span>
                    <span>Size : M</span>
                  </p>
                  <p>Seller: linaria</p>
                  <p>₹1099</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box
                sx={{ color: deepPurple[500] }}
                // onClick={() => navigate(`/account/rate/${item.product.id}`)}
                // className="flex items-center cursor-pointer"
              >
                <StarBorder sx={{ fontSize: "2rem" }} className="px-2" />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
