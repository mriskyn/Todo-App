require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3300;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log("Server Hosted on:", PORT));
