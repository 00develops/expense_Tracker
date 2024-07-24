import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  return (
    <ul>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onDeleteExpense={onDeleteExpense}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
