import React, { useEffect, useContext } from "react";
import { Header } from "../../components/Header";
import { Balance } from "../../components/Balance";
import { IncomeExpenses } from "../../components/IncomeExpenses";
import { ExpencesTable } from "../../components/ExpencesTable";
import { AddExpences } from "../../components/AddExpences";
import { GlobalContext } from "../../context/AppState";
import "./home.css";
import { http } from "../../axios/axios";

export const Home = () => {
  const users = JSON.parse(localStorage.getItem("user"));
  const userId = users.length ? users[0].id : null;
  const { AddExpences: addExpences } = useContext(GlobalContext);
  useEffect(() => {
    http
      .get(`expense/getAll/${userId}`)
      .then((response) => {
        addExpences(response.data.user);
      })
      .catch((error) => alert(error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div>
          <AddExpences />
        </div>
        <div className="tableColumn">
          <Balance />
          <IncomeExpenses />
          <ExpencesTable />
        </div>
      </div>
    </React.Fragment>
  );
};
