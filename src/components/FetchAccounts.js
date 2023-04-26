import React, { useEffect, useState } from 'react';
import MakeForm from "./MakeForm";
import SearchDatabase from "./SearchDatabase";

function FetchAccounts() {
    //Creating the state for search input
    const [transaction, setTransaction] = useState([])
    const [search, setSearch] = useState("");
    useEffect(() => {
        fetch('db.json/transactions?q=' + search)
          .then((resp) => resp.json())
          .then(transaction => setTransaction(transaction))
      }, [search])
      console.log(transaction)
      //filter out our APIData using the filter method.
     
function searchDb(e){
    setSearch(e.target.value)
    
    }
return (
    <div>
        <SearchDatabase searchDb={searchDb} />
        <MakeForm transactions={transaction} />
    </div>
    );
}


export default FetchAccounts;

        