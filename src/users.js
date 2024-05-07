// Imports small array of users
// Pretend it's an API request
const users = require("./data").default;

// Fetches all users
const getUsers = () => {
  return users;
};

// Filters users by specific ID
const getUser = (id) => {
  return users.find((user) => user.id === id);
};

// Filters user by Email
const getEmail = (email) => {
  return users.find((user) => user.email === email);
}
// test
describe('User functions test', () => {
  it('Should get the user by its id', () => {
    const user = getUser(3);
    expect(user).toEqual ({
      id: 3,
      username: "goosemotionless",
      email: "dotmeheart@outlook.com",
      password: "12345abcde",
    })
  })
})

// console.log(getUser(4));
describe('User functions test', () => {
  it('Should get the user by its email', () => {
    const user = getEmail("babariley77@gmail.com");
    expect(user).toEqual ({
      id: 4,
      username: "unsurejudy",
      email: "babariley77@gmail.com",
      password: "Kashmir1970",
    })
  })
})

module.exports = { getUsers, getUser };

