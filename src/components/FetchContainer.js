import React, { useEffect, useState } from "react";
import TransactionList from "./TransactionList";
import SearchFilter from "./SearchFilter";
import TransactionForm from "./TransactionForm";

//makes a GET request to retrieve the list of transactions and update the state with the data.
function FetchContainer() {
  const [transactions, setTransactions] = useState([]);
  const [query, setQuery] = useState("");

  //The query state is used to store the search query entered by the user and is used to trigger a re-fetch of the data when the user searches.

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

  //render a SearchDatabase component that takes the handleSearch function as a prop to update the search query. 
  //also render a MakeForm component that allows the user to create new transactions

  return (
    <div>
      <SearchFilter handleSearch={handleSearch} />
      <TransactionForm />
      <TransactionList data={filteredTransactions} />
    </div>
  );
}

export default FetchContainer;