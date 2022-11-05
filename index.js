const express = require("express");
const bodyParser = require("body-parser");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const routes = require("./routes/flightRoute");

const app = express();

app.use(bodyParser.json());

app.use("/", routes);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))