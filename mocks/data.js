import faker from 'faker'

export const GeneratePeople = (howMany = 20) => {
  return new Array(howMany).fill(0).map(() => {
    return {
      user: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName()
      },
      email: faker.internet.email()
    }
  })
}

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
