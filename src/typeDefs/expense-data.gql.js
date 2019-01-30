const { gql } = require('apollo-server')

module.exports.expense = gql`
type Query {
  costInfo: [Expense]
}
type Mutation {
  addCostInfo(costInfo: ExpenseInput): Expense
  updateCostInfo(costInfo: ExpenseInput): Expense
  deleteCostInfo(date: String): Expense
}
type Expense {
  date: String!
  user: String
  fruit: String
  present: String
  others: String
  money: Float
  comment: String
  account: Float
}
input ExpenseInput {
  date: String!
  user: String
  fruit: String
  present: String
  others: String
  money: Float
  comment: String
}
`
