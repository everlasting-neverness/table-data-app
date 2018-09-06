import React from "react";
import "./Thead.css";

class Thead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableMenuItems: [
        {
          text: "id"
        },
        {
          text: "firstName"
        },
        {
          text: "lastName"
        },
        {
          text: "email"
        },
        {
          text: "phone"
        }
      ]
    };
  }

  render() {
    return (
      <thead className="thead">
        <tr className="tr">
          {this.state.tableMenuItems.map(item => {
            return (
              <th className="th" key={item.text}>
                <button className="th-btn">
                  {item.text}
                  <i className="fas fa-chevron-circle-up" />
                </button>
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }
}

export default Thead;
