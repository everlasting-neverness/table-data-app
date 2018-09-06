import React from "react";
import "./Thead.css";

class Thead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableMenuItems: [
        {
          value: "id"
        },
        {
          value: "firstName"
        },
        {
          value: "lastName"
        },
        {
          value: "email"
        },
        {
          value: "phone"
        }
      ]
    };
  }

  render() {
    return (
      <thead className="thead">
        <tr className="thead-tr">
          {this.state.tableMenuItems.map(item => {
            return (
              <th className="th" key={item.value}>
                <button
                  className="th-btn"
                  value={item.value}
                  onClick={this.props.handleUserSort}
                >
                  {item.value}
                  <i
                    className={`fas ${
                      this.props.sortValue === item.value &&
                      this.props.sortDirectionAsc
                        ? "fa-chevron-circle-up"
                        : "fa-chevron-circle-down"
                    }`}
                  />
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
