import app from "./app.js";
const PORT = process.env.PORT || 3131;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
