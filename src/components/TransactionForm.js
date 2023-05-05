import React, { useState } from "react";

function TransactionForm() {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  //function to first check whether the form is valid before submitting the data
  function handleSubmit(e) {
    e.preventDefault();
    if (!isValidForm()) {
      return;
    }
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: date,
        description: description,
        category: category,
        amount: amount
      })
    });
    alert("Added successfully");
    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
  }
  //function checks whether all fields have been filled out and whether the amount field contains a valid number.
  function isValidForm() {
    if (!date || !description || !category || !amount) {
      //If the form is not valid, an alert is shown to the user and the data is not submitted
      alert("Please fill out all fields.");
      return false;
    }
    if (isNaN(parseFloat(amount))) {
      alert("Please enter a valid amount.");
      return false;
    }
    return true;
  }

  return (
    <div className="main-form">
      <form onSubmit={handleSubmit}>
        <div className="fields">
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            name="date"
            required
          />

          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            name="description"
            placeholder="Enter Description"
            required
          />

          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            name="category"
            placeholder="Enter Category"
            required
          />

          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            required
          />
        </div>
        <div className="button-container">
          <button className="button" type="submit">
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
}

export default TransactionForm;