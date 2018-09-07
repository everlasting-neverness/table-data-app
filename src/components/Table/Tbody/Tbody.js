import React from "react";
import "./Tbody.css";

function Tbody(props) {
  let outputData = props.tableData.filter(item => {
    if (!props.userSearchInput) {
      return true;
    } else {
      let match;
      for (let value in item) {
        if (value === "address") {
          for (let adressValue in item[value]) {
            match = item[value][adressValue]
              .toLowerCase()
              .includes(props.userSearchInput.toLowerCase())
              ? true
              : false;
            if (match === true) return true;
          }
        } else if (value !== "id") {
          match = String(item[value])
            .toLowerCase()
            .includes(props.userSearchInput.toLowerCase())
            ? true
            : false;
          if (match) return true;
        }
      }
      return match;
    }
  });

  return (
    <tbody className="tbody">
      {outputData ? (
        outputData
          .slice(props.currentPage === 1 ? props.currentPage - 1 : (50 * (props.currentPage - 1)), props.currentPage * 50)
          .map(row => (
            <tr
              className="tbody-tr"
              data-id={row.id}
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
