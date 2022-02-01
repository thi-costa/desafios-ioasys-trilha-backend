const { Client } = require("pg");
const config = require("./database");

const client = new Client(config);
const createSeed = async () => {
  await client.connect();
  await client.query(`INSERT INTO users (email,password)
  VALUES ('terry@gmail.com','teste'), ('lukas@example.com','1234567@'), ('mikael@example.com','1234teste');`);

  await client.end();
};

createSeed();
