import React from "react";

export const TableRows = ({ data }) => {
  return (
    <>
      {data.map((row, index) => (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.mobile}</td>
          <td>{row.addrs}</td>
          <td>{row.city}</td>
          <td>{row.states}</td>
          <td>{row.zip}</td>
          <td>{row.type}</td>
        </tr>
      ))}
    </>
  );
};
