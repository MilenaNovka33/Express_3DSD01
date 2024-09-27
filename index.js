const express = require("express");
const app = express();

const PORT = 3737;

app.get("/", function (req, res) {
  res.send("Bla Bla Bla");
});

app.listen(PORT, () => {
  console.log("running... " + PORT);
});
