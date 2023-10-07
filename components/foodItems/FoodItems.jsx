"use client";
import React, { useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from "next/router";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  IconButton,
  Paper,
} from "@mui/material";
import SpecialBanner from "../specialDish/SpecialBanner";
import styles from "./FoodIItems.module.css";
import {
  Add,
  AddCircleOutline,
  RemoveCircleOutline,
} from "@mui/icons-material";
import BillPage from "../summeryCard/SummaryCard";
import { cartReducer } from '../../redux/reducer';
import { useDispatch, useSelector } from "react-redux";

function FoodItemCard({ name, type, price, image, addToBill }) {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const handleAddToPlate = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: { name, price }
    });
    setQuantity(quantity + 1);
    addToBill({ name, price }); 
  };

  const handleRemoveFromPlate = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Card variant="outlined" style={{ padding: "0px", marginBottom: "0rem", border: "none" }}>
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "20vh",
          maxHeight: "40vh",
          objectFit: "cover",
          borderRadius: "18px",
        }}
      />

      <CardContent className="p-0 py-2">
        <Typography
          variant="h6"
          component="div"
          style={{
            color: "black",
            fontSize: "1.125rem",
            fontWeight: "500",
          }}
        >
          {name}
        </Typography>
        {/* <Typography variant="body2">{type}</Typography> */}
        {price && (
          <Typography
            variant="body2"
            style={{ fontSize: "36px", fontWeight: "700" }}
          >
            {price}
          </Typography>
        )}
      </CardContent>
      <CardActions
        style={{
          justifyContent: "center",
          padding: "0rem",
        }}
      >
        {quantity === 0 ? (
          <Button
            size="small"
            variant="contained"
            onClick={handleAddToPlate}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#000",
              borderRadius: "25px",
              fontSize: "14px",
              width: "100%",
              padding: "12px",
            }}
          >
            Add To Plate
          </Button>
        ) : (
          <div>
            <IconButton onClick={handleRemoveFromPlate}>
              <RemoveCircleOutline />
            </IconButton>
            {quantity}
            <IconButton onClick={handleAddToPlate}>
              <AddCircleOutline />
            </IconButton>
          </div>
        )}
      </CardActions>
    </Card>
  );
}

function FoodItems({ selectedOption }) {
  const [bill, setBill] = useState([]);
  const [showBill, setShowBill] = useState(false);
  const count = useSelector((state) => state.length);

  const router = useRouter(); // Get the router object

  const addToBill = (item) => {
    setBill((prevBill) => [...prevBill, item]);
  };

  const handleShowBill = () => {
    router.push({
      pathname: "/menu/bill",
      query: { bill: JSON.stringify(bill) }, // Convert bill array to JSON string
    });
  };

  const removeFromBill = (itemIndex) => {
    setBill((prevBill) => prevBill.filter((_, index) => index !== itemIndex));
  };

  const toggleBillSection = () => {
    setShowBill(!showBill);
  };

  const foodItems = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600935926387-12d9b03066f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      name: "Roti",
      type: "Roties",
      price: "7rs.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      name: "Butter Roti",
      type: "Roties",
      price: "10rs.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      name: "Tandoori Roti",
      type: "Roties",
      price: "15rs.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      name: "Chapati",
      type: "Roties",
      price: "5rs.",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1600935926387-12d9b03066f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      name: "Veg Biryani",
      type: "Veg",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      name: "Chicken Curry",
      type: "NonVeg",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1630851840633-f96999247032?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      name: "Chicken Biryani",
      type: "NonVeg",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      name: "Matter Paneer",
      type: "Veg",
    },
    {
      id: 9,
      name: "Special Dish",
      type: "Special",
      price: "20Rs",
      image:
        "https://images.unsplash.com/photo-1564671165093-20688ff1fffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1898&q=80", // Pass the imported image
    },
  ];

  const filteredItems =
    selectedOption === "All"
      ? foodItems
      : foodItems.filter((item) => item.type === selectedOption);

  const specialDish = foodItems.find((item) => item.type === "Special");
  return (
    <>
      {specialDish && <SpecialBanner specialItem={specialDish} />}
      <div className={styles.cardContainer} style={{ marginInline: "2rem" }}>
        {/* Display Special Banner */}
        {filteredItems.map((item) => (
          <div className={styles.card} key={item.id}>
            <FoodItemCard
              name={item.name}
              price={item.price}
              image={item.image}
              addToBill={addToBill}
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleShowBill}
        className="fixed bottom-8 right-8 bg-[#f00] text-white py-[12px] px-[36px] rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
      >
        <ShoppingCartIcon /> : {count}
      </button>

      {showBill && <BillPage bill={bill} />}
    </>
  );
}

export default FoodItems;
