import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpense from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {
      // props.expenses.map(({ description, amount, createdAt, id }) => {
      //   return (
      //     <ExpenseListItem
      //       description={description}
      //       amount={amount}
      //       createdAt={createdAt}
      //       key={id}
      //     />
      //   )
      // })
      props.expenses.map((expense) => {
        return (
          <ExpenseListItem
            {...expense}
            key={expense.id}
          />
        )
      })
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpense(state.expenses,state.filters)
  }
};

export default connect(mapStateToProps)(ExpenseList);


// it can re-written as

// const ConnectedExpenseList = connect((state) => {
//   return {
//     expenses: state.expenses,
//     filters: state.filters

//   }
// })(ExpenseList);
// export default ConnectedExpenseList;
