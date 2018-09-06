import React from "react";

function Table(props) {
  return (
    <section className="table-container">
      <table className="table">
        <thead className="thead">
          <tr className="tr">
            <th className="th">
              <button>id</button>
            </th>
            <th className="th">
              <button>firstName</button>
            </th>
            <th className="th">
              <button>lastName</button>
            </th>
            <th className="th">
              <button>email</button>
            </th>
            <th className="th">
              <button>phone</button>
            </th>
          </tr>
        </thead>
        <tbody className="tbody">
          {props.tableData.map(row => (
            <tr className="tr" key={row.id}>
              <td className="td">{row.id}</td>
              <td className="td">{row.firstName}</td>
              <td className="td">{row.lastName}</td>
              <td className="td">{row.email}</td>
              <td className="td">{row.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
