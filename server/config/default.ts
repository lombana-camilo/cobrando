import "dotenv/config";
const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;

export default {
  port: 1234,

  // Database
  dbUser: DB_USER,
  dbPassword: DB_PASSWORD,
  dbName: DB_NAME,
  host: "localhost",
};
