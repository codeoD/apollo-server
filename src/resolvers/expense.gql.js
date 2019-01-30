let MockExpenses = [
  {
    date: '2011-01-01',
    fruit: [
      {
        name: 'banana',
        cost: 1.25,
        user: {
          name: 'liu',
          sex: 0,
          joinTime: '2010-01-01'
        }
      }
    ],
    present: [],
    others: [],
    comment: 'this is a test data',
    account: 25.8
  },
  {
    date: '2011-02-01',
    fruit: [
      {
        name: 'banana',
        cost: 1.25,
        user: {
          name: 'lee',
          sex: 1,
          joinTime: '2010-01-01'
        }
      }
    ],
    present: [],
    others: [],
    comment: 'this also is a test data',
    account: 25.9
  }
]
let user = [
  {
    name: 'lee',
    sex: 1,
    joinTime: '2016-09-08'
  },
  {
    name: 'luo',
    sex: 0,
    joinTime: '2015-09-08'
  }
]
let mockExpense = [{
  date: '2012-09-08',
  user: 'lee'
}]
let storeObj = []

module.exports.expenseResolvers = {
  Query: {
    costInfo: () => storeObj
  },
  Mutation: {
    addCostInfo: (parent, args, context, info) => {
      console.log(args)
      // 写到数据库
      // let obj = {
      //   ...args.expense,
      //   user: args.expense.user
      // }
      storeObj.push(args.costInfo)
      return args.costInfo
    },
    updateCostInfo: (parent, args, context, info) => {
      console.log(args)
      // 写到数据库
      let index = storeObj.findIndex(expense => expense.date === args.costInfo.date)
      let obj = {
        ...storeObj[index],
        ...args.costInfo
      }
      storeObj.splice(index, 1, obj)
      return obj
    },
    deleteCostInfo: (parent, args, context, info) => {
      console.log(args)
      // 写到数据库
      let index = storeObj.findIndex(expense => expense.date === args.costInfo.date)
      return storeObj.splice(index, 1)
    }
  }
}
