import React from "react";
import "./Tbody.css";

function Tbody(props) {
  return (
    <tbody className="tbody">
      {props.tableData ? (
        props.tableData.map(row => (
          <tr className="tr" key={row.id}>
            <td className="td">{row.id}</td>
            <td className="td">{row.firstName}</td>
            <td className="td">{row.lastName}</td>
            <td className="td">{row.email}</td>
            <td className="td">{row.phone}</td>
          </tr>
        ))
      ) : (
        <tr />
      )}
    </tbody>
  );
}

export default Tbody;
