import React, { useState, useEffect, useContext } from "react";
import { ACTIONS } from "../resources/constants";
import CounterContext from "../resources/context/CounterContext";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const FirstCounter = () => {
  const { store } = useContext(CounterContext);
  const [value, setValue] = useState(0);

  const callback = (data) => {
    setValue(data);
  };

  // useEffect(() => {
  //   store.subscribe("counter", callback);
  //   // return store.unsubscribe("counter", callback);
  // }, [store]);

  const handleSubscribe = () => {
    store.subscribe("counter", callback);
    setValue(store.counterValue);
  };

  const handleUnsubscribe = () => store.unsubscribe("counter");

  const handleIncrement = () => {
    if (store.isSubscribed("counter")) {
      store.publish(ACTIONS.increment, 1);
    } else {
      setValue(value + 1);
    }
  };

  const handleDecrement = () => {
    if (store.isSubscribed("counter")) {
      store.publish(ACTIONS.decrement, 1);
    } else {
      setValue(value - 1);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Button onClick={handleIncrement}>+</Button>
      <Typography>{value}</Typography>
      <Button onClick={handleDecrement}>-</Button>
      <Button onClick={handleSubscribe}>Subscribe</Button>
      <Button onClick={handleUnsubscribe}>Unsubscribe</Button>
    </Box>
  );
};

export default FirstCounter;
