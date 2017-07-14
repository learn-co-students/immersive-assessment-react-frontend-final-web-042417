import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'


class AccountContainer extends Component {
  constructor() {
    super()

    this.state = {
      transactions: [],
      activeCategory: "All"
    }
  }

  componentWillMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(resp => resp.json())
      .then(data => this.setState({
        transactions: data
      }))
  }

  handleChange = (event) => {
    this.setState({
      activeCategory: event.target.value
    })
  }

  selectButton() {
    return this.state.activeCategory === "All" ? this.state.transactions : this.state.transactions.filter(transaction => transaction.category.includes(this.state.activeCategory))
  }

  render() {
    const displayedTransactions = this.selectButton()

    return (
      <div className="ui grid container">

        <CategorySelector
          activeCategory={ this.state.activeCategory }
          handleChange={ this.handleChange }
        />

        <TransactionsList
          transactions={ displayedTransactions }

        />

      </div>
    )
  }
}

export default AccountContainer
