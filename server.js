const express = require("express");
const app = express();
app.listen("4500", () => {
  console.log(`Server running on port 4500`);
});
app.use(express.static("public"));
