let express = require("express");
let app = express();
let api = require("./api");

app.use("/api/v1", api);

let server = app.listen("3003", () => console.log("server is up and running"));
