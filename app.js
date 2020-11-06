const express = require("express");
const app = express();
const router = express.Router();
const postsRoute = require("./routes/posts");

require("./config/database");
app.use(express.static("public"));

const port = 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use("/api/posts", postsRoute);
