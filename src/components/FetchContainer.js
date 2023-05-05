import React, { useEffect, useState } from "react";
import TransactionList from "./TransactionList";
import SearchFilter from "./SearchFilter";
import TransactionForm from "./TransactionForm";

function FetchContainer() {
  const [transactions, setTransactions] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8001/transactions?q=` + query)
      .then((resp) => resp.json())
      .then(transaction => setTransactions(transaction))
  }, [query])

  function handleSearch(event) {
    setQuery(event.target.value);
  }

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <SearchFilter handleSearch={handleSearch} />
      <TransactionForm />
      <TransactionList data={filteredTransactions} />
    </div>
  );
}

export default FetchContainer;