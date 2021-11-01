const fs = require("fs");
const path = require("path");

const getStream = (filename) => {
  return fs.createReadStream(
    path.resolve(__dirname, "lists", `${filename}.csv`)
  );
};

const skippingHeaders = [
  undefined,
  undefined,
  "dni",
  "lastnames",
  "names",
  undefined,
  undefined,
];

const parseConfig = {
  headers: skippingHeaders,
  renameHeaders: true,
  ignoreEmpty: true,
};

const validate = (data) => [10, 13].includes(data.dni.length);

const transform = (data) => ({
  dni: data.dni.trim(),
  names: data.names.trim(),
  lastnames: data.lastnames.trim(),
});

module.exports = {
  getStream,
  parseConfig,
  validate,
  transform,
};
