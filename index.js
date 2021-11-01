const csv = require("@fast-csv/parse");

const { getStream, parseConfig, validate, transform } = require("./utils");
const { addUser } = require("./firebase");

const stream = getStream("test");

csv
  .parseStream(stream, parseConfig)
  .validate(validate)
  .transform(transform)
  .on("error", (error) => console.error(error))
  .on("data", (row) => {
    addUser(row);
    console.log(row);
  })
  .on("end", (rowCount) => console.log(`Parsed ${rowCount} rows`));
