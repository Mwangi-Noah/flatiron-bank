import React from "react";
import PopulateList from "./PopulateList";

function MakeForm({ transactions }) {
  const data = transactions.map((item) => {
    return (
      <PopulateList
        key={item.id}
        date={item.date}
        description={item.description}
        category={item.category}
        amount={item.amount}
      />
    );
  });

  return (
    <table className="table-main">
      <tbody>
        <tr>
          <th>
            <h2 className="table-header">Date</h2>
          </th>
          <th>
            <h2 className="table-header">Description</h2>
          </th>
          <th>
            <h2 className="table-header">Category</h2>
          </th>
          <th>
            <h2 className="table-header">Amount</h2>
          </th>
        </tr>
        {data}
      </tbody>
    </table>
  );
}

export default MakeForm;