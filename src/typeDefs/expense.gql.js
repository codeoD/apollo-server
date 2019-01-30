const { gql } = require('apollo-server')

// 低版本的node不支持es6模块语法
module.exports.expenseTypeDefs = gql`
type Query {
  expenses: [Expense]
}
type Mutation {
  addExpense(expense: ExpenseInput): Expense
  updateExpense(expense: ExpenseInput): Expense
  deleteExpense(date: String): Expense
}
input ExpenseInput {
  date: String
  fruit: [FruitInput]
  present: [PresentInput]
  others: [OthersInput]
  comment: String
  account: Float
}
input FruitInput {
  name: String
  cost: Float
  user: String
  mass: Float
}
input PresentInput {
  name: String
  cost: Float
  user: String
  forUser: String
}
input OthersInput {
  name: String
  cost: Float
  user: String
  eatable: Boolean
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

type User {
  name: String
  sex: Int,
  joinTime: String
}

interface Thing {
  name: String
  cost: Float
  user: User
}
type Fruit implements Thing {
  name: String
  cost: Float
  user: User
  mass: Float
}

type Present implements Thing {
  name: String
  cost: Float
  user: User
  forUser: User
}

type Others implements Thing {
  name: String
  cost: Float
  user: User
  eatable: Boolean
}
`
