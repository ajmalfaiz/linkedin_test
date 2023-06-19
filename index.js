// Import packages
const express = require("express");
const cors = require('cors'); 
const bodyParser = require('body-parser');
const home = require("./routes/home");


// Middlewares
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors('*'));

// Routes
app.use("/linkedin", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));