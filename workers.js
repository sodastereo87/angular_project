let faker = require("faker");

let generateWorkers = () => {
  let workers = [];

  for (let id = 0; id < 10; id++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let title = faker.name.title();
    let email = faker.internet.email();
    let recent = faker.date.recent();
    let paragraph = faker.lorem.paragraph();

    workers.push({
      id: id,
      firstName: firstName,
      lastName: lastName,
      title: title,
      email: email,
      recent: recent,
      paragraph: paragraph
    });
  }

  return { workers: workers };
};

module.exports = generateWorkers;
