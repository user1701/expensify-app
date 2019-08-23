import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends Component {
    onSubmit = (expense) => {
        console.log('updated', expense);
        const { id } = this.props.expense;
        this.props.editExpense(id, expense);
        this.props.history.push('/');
    };
    onRemove = () => {
        const { id } = this.props.expense;
        this.props.removeExpense({id});
        this.props.history.push('/');
    };
    render() {
        const { expense } = this.props;
        return (
            <div>
                <ExpenseForm 
                    expense={expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (expense) => dispatch(removeExpense(expense))
});

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);