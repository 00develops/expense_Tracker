import React from 'react';

const TotalExpenses = ({ expenses }) => {
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  return <h2>Total: ${total.toFixed(2)}</h2>;
};

export default TotalExpenses;
