
// required modules
const express = require("express");

const app = express();
const chatApp = require("./app");

app.set("port", process.env.PORT || 3000);

app.use(express.static("public"));

app.set("view engine", "jade");

app.use("/", chatApp.router);

app.listen(app.get("port"), () => {
  console.log("ChatApp running on port ", app.get("port"));
});
