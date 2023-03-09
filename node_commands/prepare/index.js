require("dotenv").config()
const { writeFile } = require("fs");
const { join, dirname } = require('path');
const { GraphQLClient } = require("graphql-request");
const { query } = require("./query");

const appDir = process.cwd();
const baseDir = join(appDir, '/src/generated/');
const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, {
  headers: {
    "store": process.env.NEXT_PUBLIC_STORE_CODE
  }
})

client.request(query).then(function (data) {
  console.log(baseDir)
  writeFile(`${baseDir}config.json`, JSON.stringify(data), err => {
    if (err) { console.error(err) }
  });
})
