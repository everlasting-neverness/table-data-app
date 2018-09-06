import React from "react";
import "./InfoBlock.css";

function InfoBlock(props) {
  if (!props.currentItem) {
    return <div />;
  }
  let { streetAddress, city, state, zip } = props.currentItem.address;
  return (
    <div className="info-block">
      <div className="info-item">
        <span className="info-item-defenition">Selected User: </span>
        <span className="info-item-content">{`${props.currentItem.firstName} ${props.currentItem.lastName}`}</span>
      </div>
      <div className="info-item">
        <span className="info-item-defenition">Description:</span>
        <span className="info-item-content">{props.currentItem.description}</span>
      </div>
      <div className="info-item">
        <span className="info-item-defenition">Adress:</span>
        <span className="info-item-content">{streetAddress}</span>
      </div>
      <div className="info-item">
        <span className="info-item-defenition">City:</span>
        <span className="info-item-content">{city}</span>
      </div>
      <div className="info-item">
        <span className="info-item-defenition">State:</span>
        <span className="info-item-content">{state}</span>
      </div>
      <div className="info-item">
        <span className="info-item-defenition">Zip:</span>
        <span className="info-item-content">{zip}</span>
      </div>
    </div>
  );
}

export default InfoBlock;
