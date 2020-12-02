const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const postsRoute = require("./routes/posts");
const placementRoute = require("./routes/placements");
const companyRoute = require("./routes/company");
const authRoutes = require("./routes/auth");

require("./config/database");

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use("/api/auth", authRoutes);
app.use("/api/posts", postsRoute);
app.use("/api/placements", placementRoute);
app.use("/api/company", companyRoute);
