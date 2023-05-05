import React, { useState } from "react";

function TransactionForm() {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

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

  function isValidForm() {
    if (!date || !description || !category || !amount) {
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
      <form onSubmit={handleSubmit} className="ui form">
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