import express from "express";

import renderer from "./helpers/renderer";

const app = express();

// serve the public directory statically
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(renderer());
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
