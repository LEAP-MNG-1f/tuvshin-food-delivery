"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { FoodItem } from "./AllFoodPage";

export default function ResponsiveDialog({
  image,
  price,
  name,
  ingredient,
}: FoodItem) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xl"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>
        <div className="">
          <div className=" flex flex-col gap-2 justify-start items-start shadow-lg ">
            <img
              className="w-[350px] object-cover h-[180px] rounded-lg"
              src={image}
            />
            <h3 className="text-black text-lg font-semibold">{name}</h3>
            <p className="text-green-500 text-lg font-semibold">{price} </p>
          </div>
        </div>
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <div className="flex gap-10">
            <div>
              <img className="w-[500px] h-[300px] rounded-lg" src={image} />
            </div>
            <div>
              <div className="flex flex-col gap-9">
                <div>
                  <p className="font-semibold text-lg">{name}</p>
                  <p className="text-green-500">{price}</p>
                </div>
                <div>
                  <p className="font-semibold text-lg">Орц</p>
                  <p className="w-[200px] font-normal text-base line-clamp-3 text-[#767676] rounded-lg bg-gray-200">
                    {ingredient}
                  </p>
                </div>
                <div>
                  <button className="bg-[#18BA51] text-white w-[204px] rounded-xl h-[54px]">
                    Сагслах
                  </button>
                </div>
              </div>
            </div>
          </div>
        </DialogTitle>
      </Dialog>
    </React.Fragment>
  );
}
