import app from "./config/express";

const PORT: number = Number(process.env.PORT) | 3100;
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
