import React from 'react';

const Grocery = ({name, quantity, notes, starred, onStar, onPurchase, onDelete}) => (
  <div>
    <h3>{name}</h3>
    <p>Quantity: { quantity }</p>
    <p>{notes}</p>
    <button className="delete-button" onClick={onDelete}>Delete</button>
  </div>
)

export default Grocery
