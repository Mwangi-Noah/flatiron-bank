import React, { useEffect, useState } from 'react';
import SearchFunction from "./SearchFunction";
import MakeForm from "./MakeForm";

function FetchAccounts() {
    //Creating the state for search input
    const [transaction, setTransaction] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
  
    useEffect(() => {
        fetch('db.json/transactions')
          .then((resp) => resp.json())
          .then(transaction => setTransaction(transaction))
      }, [])
      //filter out our APIData using the filter method.
      const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = setTransaction.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(transaction)
        }
    }
    
    return (
        <div>
        
        <MakeForm transactions={filteredResults} />
        </div>
    );
}

export default FetchAccounts;

        