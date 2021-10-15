require("dotenv").config();

const env = process.env.NODE_ENV || "development";
const configurations = {
  base: {
    env,
    name: process.env.APP_NAME || "interview-project",
    port: process.env.API_PORT || 8080,
    host: process.env.API_HOST || "http://localhost",
  },
};

module.exports = Object.assign(configurations.base);
