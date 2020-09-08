import faker from 'faker'

export default () => {
  return new Array(20).fill(0).map(() => {
    return {
      amount: faker.finance.amount(),
      date: faker.date.past(),
      business: faker.company.companyName(),
      name: faker.finance.accountName(),
      type: faker.finance.transactionType(),
      account: faker.finance.account()
    }
  })
}
