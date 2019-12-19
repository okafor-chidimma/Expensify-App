import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';
const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense Page</h1>
    <ExpenseForm
      buttonState="create"
      expense={{}}
      onSubmit={
        (expenseDetails) => {
          console.log(expenseDetails, 'i am expense details');
          props.dispatch(addExpense(expenseDetails));
          props.history.push('/');
        }
      }
    />
  </div>
);

export default connect()(AddExpensePage);
