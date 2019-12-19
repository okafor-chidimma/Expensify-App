import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  console.log(props);

  return (
    <div>
      Editing the expense of {props.match.params.id}
      <ExpenseForm
        expense={props.expense}
        buttonState="edit"
        onSubmit={
          (expenseDetails) => {
            console.log(expenseDetails, 'i am expense details');
            props.dispatch(editExpense({ id: props.match.params.id }, expenseDetails));
            props.history.push('/');
          }
        }
      />
      <button onClick={() => {
        props.dispatch(removeExpense({ id: props.match.params.id }));
        props.history.push('/');

      }}>
        Remove Item
    </button>
    </div>
  )
};

// connect method has access to the connected component props by accepting a second parameter which is the props

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
};
export default connect(mapStateToProps)(EditExpensePage);