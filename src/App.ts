import app from "./config/express";

const PORT: number = 3100;
app.listen(PORT, () => {
  console.log("server");
});
