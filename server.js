const express = require("express");
const app = express();

// req is the Request object, res is the Response object
// (these are just variable names, they can be anything but it's a convention to call them req and res)
// app.get("/", (req, res) => {
//   res.send("Hello World!");
//
// });
// app.get("/", function (req, res) {
//   res.send("Yay Node!");
// });
// app.get("/chocolate", function (req, res) {
//     let searchQuery = req.query.search;
//   res.send("Mm chocolate :O You searched for " + searchQuery);
// });
// app.get("/codeyourfuture", (req, res) => {
//     res.send(["trainees", "volunteers", "fun"]);
// }); 
app.get("/", function (req, res) {
  let searchQuery = req.query.search; //give this a value with the local host
  let amount = req.query.amount;
  console.log(req.query);
  res.send("Hello World! You searched for " + searchQuery) + amount;
});

app.get("/chocolate", (req, res) => {
    let amount = req.query.amount;
    res.send("Chocolate is yummy " + amount);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
}); //should I alway have this code at the bottom? or is it a checking instruction?
