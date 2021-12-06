import React, { useContext } from "react";
import { GlobalContext } from "../context/AppState";

export const Balance = () => {
  const { expences } = useContext(GlobalContext);
  const amounts = expences.map((expence) => Number(expence.amount));

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <React.Fragment>
      <h2>Your Balance</h2>
      <h1>{total}</h1>
    </React.Fragment>
  );
};
