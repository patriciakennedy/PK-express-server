// require express so we can use
// the variable name can be anything other than 'express'
// we requiring a package
const express = require('express');

// we have require express now we need to use it
// create an instance of express
// here express is a function
// we have a variable called "app". we set it to the value of the function (express) when it is call
const app = express();

// set up a variable for our port
// process.env.PORT is something we will use when we host our projects on services like Heroku
// you can only have one project running on a port at a time
// 5001 is used for localhost development
// this is the port that we will run our project on
const port = process.env.PORT || 5001;

// we need to tell our servers where our files are
// we need to tell our server where all of out client side files (html,css, JS)are located
// telling the server - when you get a request send back those client side files
app.use(express.static('server/public'));


// next we need to tell the server to listen for request on our port
// setup our server to listern to incoming requests on port 5001
app.listen(port, () => {
   console.log(`Listening on port: ${port}`);
});