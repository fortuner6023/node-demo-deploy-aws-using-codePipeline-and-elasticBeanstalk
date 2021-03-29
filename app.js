const express = require("express");
const app = express();
const port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send({
    statusCode: 200,
    status: "Success",
    Message: "Welcome To Aws Node Demo By Nav3en",
  });
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
