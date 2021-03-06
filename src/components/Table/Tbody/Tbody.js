import React from "react";
import "./Tbody.css";

function Tbody(props) {
  return (
    <tbody className="tbody">
      {props.tableData ? (
        props.tableData
          .slice(50 * (props.currentPage - 1), props.currentPage * 50)
          .map(row => (
            <tr
              className="tbody-tr"
              key={row.id + row.email + row.lastName}
              data-id={row.id}
              data-email={row.email}
              data-lastname={row.lastName}
              onClick={props.handleItemSelect}
            >
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
