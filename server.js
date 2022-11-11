const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + "/dist/talabat"));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/talabat/index.html"));
});

app.listen(process.env.PORT || 8080);
