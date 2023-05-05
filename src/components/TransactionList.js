import React from "react";
import PopulateList from "./PopulateList";

function TransactionList({ data }) {
  const list = data
    ? data.map((item) => (
        <PopulateList
          key={item.id}
          date={item.date}
          description={item.description}
          category={item.category}
          amount={item.amount}
        />
      ))
    : null;

  return (
    <table className="main-table">
      <tbody>
        <tr>
          <th>
            <h3 className="header">Date</h3>
          </th>
          <th>
            <h3 className="header">Description</h3>
          </th>
          <th>
            <h3 className="header">Category</h3>
          </th>
          <th>
            <h3 className="header">Amount</h3>
          </th>
        </tr>
        {list}
      </tbody>
    </table>
  );
}

export default TransactionList;