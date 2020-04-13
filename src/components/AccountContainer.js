import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
//import {transactions} from '../transactionsData'

var dataSet = []
class AccountContainer extends Component {

  constructor() {
    super()

      this.state = {data: []}


    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }


  componentDidMount() {
  fetch('https://boiling-brook-94902.herokuapp.com/transactions')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
  this.setState({data: data});
  dataSet = data
  });

  }

  handleChange(event) {
    const text = event.target.value
    const filteredData = dataSet.filter(transaction => (transaction.description.includes(text) || transaction.category.includes(text)))
    this.setState({data: filteredData})
    // your code here
  }

  render() {

    return (
      <div>
        <Search changeScript={this.handleChange.bind(this)}/>
        <TransactionsList T={this.state.data}/>
      </div>
    )
  }
}

export default AccountContainer
