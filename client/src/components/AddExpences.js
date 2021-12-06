import React, { useState, useContext } from "react";
import { http } from "../axios/axios";
import { GlobalContext } from "../context/AppState";
import { CardButton } from "./button/CardButton";
import { CardInput } from "./input/CardInput";

export const AddExpences = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    amount: "",
    description: "",
    comment: "",
  });
  const users = JSON.parse(localStorage.getItem("user"));
  const userId = users.length ? users[0].id : null;
  const { AddExpences } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newExpences = {
      user_id: userId,
      id: Math.floor(Math.random() * 100000000),
      title: formValues.title,
      description: formValues.description,
      comment: formValues.comment,
      amount: +formValues.amount,
    };
    http
      .post("expense/insertExpence", newExpences)
      .then((response) => {
        console.log(response.data);
        AddExpences(response.data.user);
        setFormValues({
          title: "",
          amount: "",
          description: "",
          comment: "",
        });
      })
      .catch((error) => console.log(error));
  };

  const handlechange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h3>Add new expences</h3>
      <form name="add-expence-from" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Title</label>
          <CardInput
            type="text"
            value={formValues.title}
            name="title"
            onChange={handlechange}
            placeholder="Enter Title"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <CardInput
            type="number"
            value={formValues.amount}
            name="amount"
            onChange={handlechange}
            placeholder="Enter amount"
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <CardInput
            type="text"
            value={formValues.description}
            name="description"
            onChange={handlechange}
            placeholder="Enter Description"
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Comments</label>
          <CardInput
            type="text"
            value={formValues.comment}
            name="comment"
            onChange={handlechange}
            placeholder="Enter Comment"
          />
        </div>
        <CardButton title="Add Expences" type={"submit"} />
      </form>
    </>
  );
};
