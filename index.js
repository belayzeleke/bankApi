//http
const http = require("http");

//Express
const express = require("express");

//Dotenv
const dotenv = require("dotenv");
dotenv.config({path: "./config.env"});

//Mongooes
const mongooes = require("mongooes");

//Craeate server
const server = http.createServer(app);
//Port
const port = process.env.port || 3000;

//Listn on the server
server.listen(port, () => {
    console.log(`Lesting on the port ${port}...`)
});

//connect to DB
//mongooes.connect(process.env.DATABASE_REMOTE)

/// Connect to DB mongoose
 mongooes.connect(process.env.DATABASE_REMOTE)
  .then(() => {
    console.log(`Connected successfully`);
  })
  .catch((err) => {
    console.log(err);
  });

// db connection
const db_connection = mongooes.connection;

// Handle error
db_connection.on("disconnected", () => {
  console.log("DB disconnceted");
});

db_connection.on("error", (err) => {
  console.log("--- ERROR ---");
  console.log(err);
});