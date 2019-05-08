// Require native node package for file paths
let path = require("path");
// Require express server NPM
let express = require("express");

// Tells node that I am creating an express server.
let app = express();

// Set up Express to handle URL/JSON parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configure port
let PORT = process.env.PORT || 3000;

//Router
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// Pull in other js pages???

// Listener
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});