"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DeleteIcon from "@mui/icons-material/Delete";
import { FoodItem } from "./AllFoodPage";
import Link from "next/link";

type CartItem = FoodItem & { quantity: number };
type Anchor = "right";

export default function AnchorTemporaryDrawer() {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [state, setState] = React.useState({
    right: false,
  });

  // Load cart items from localStorage on component mount
  React.useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCartItems(savedCart);
  }, []);

  // Update localStorage whenever cart items change
  React.useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  // Remove item from cart
  const removeFromCart = (itemId: string) => {
    const updatedCart = cartItems.filter((item) => item._id !== itemId);
    setCartItems(updatedCart);
  };

  // Increase quantity of an item
  const increaseQuantity = (itemId: string) => {
    const updatedCart = cartItems.map((item) =>
      item._id === itemId
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    );
    setCartItems(updatedCart);
  };

  // Decrease quantity of an item
  const decreaseQuantity = (itemId: string) => {
    const updatedCart = cartItems
      .map((item) => {
        if (item._id === itemId) {
          const newQuantity = Math.max((item.quantity || 1) - 1, 0);
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      })
      .filter(Boolean) as CartItem[];
    setCartItems(updatedCart);
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const list = (anchor: Anchor) => (
    <Box sx={{ width: anchor === "right" ? 420 : 250 }} role="presentation">
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={toggleDrawer(anchor, false)}>
            <ListItemIcon>
              <ArrowBackIosIcon />
            </ListItemIcon>
            <ListItemText primary="Таны сагс" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />

      {cartItems.length === 0 ? (
        <div className="text-center py-8 text-gray-500">Сагс хоосон байна</div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex mb-4 gap-6 border-b p-4 relative"
            >
              <div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[100px] h-[80px] object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2 flex-grow">
                <span className="font-bold">{item.name}</span>
                <span className="text-[12px] text-gray-600">
                  {item.ingeredient}
                </span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQuantity(item._id)}
                      className="bg-gray-200 px-2 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity || 1}</span>
                    <button
                      onClick={() => increaseQuantity(item._id)}
                      className="bg-gray-200 px-2 rounded"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-green-500 font-semibold">
                    {(item.price * (item.quantity || 1)).toLocaleString()} ₮
                  </span>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item._id)}
                className="absolute top-2 right-2 text-red-500"
              >
                <DeleteIcon />
              </button>
            </div>
          ))}

          <div className="p-4 border-t flex justify-between items-center">
            <span className="font-bold">Нийт дүн:</span>
            <span className="text-green-500 font-bold text-xl">
              {totalPrice.toLocaleString()} ₮
            </span>
          </div>
          <div className="p-4">
            <Link href="/order">
              <button
                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
                onClick={() => {
                  // Here you can add checkout logic
                  alert("Төлбөр хийх хуудас руу шилжүүлэх");
                }}
              >
                Захиалах
              </button>
            </Link>
          </div>
        </div>
      )}
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <button onClick={toggleDrawer(anchor, true)}>
            <h2 className="p-4 text-sm font-bold text-[#000]">
              {"Сагс"} (
              {cartItems.reduce(
                (total, item) => total + (item.quantity || 1),
                0
              )}
              )
            </h2>
          </button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
