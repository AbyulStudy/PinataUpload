import app from "./config/express";

app.get("/", (req, res) => {
  res.send("test");
});

app.listen(3100, () => {
  console.log("server");
});
