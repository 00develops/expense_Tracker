import React from 'react';

const ExpenseItem = ({ expense, onDeleteExpense }) => {
  return (
    <li>
      {expense.description}: ${expense.amount.toFixed(2)}
      <button onClick={() => onDeleteExpense(expense.id)}>Delete</button>
    </li>
  );
};

export default ExpenseItem;
