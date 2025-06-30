import app from "./app";
import connectDB from "./lib/mongoose";

const PORT = process.env.PORT || 4000;

connectDB();

app.listen(PORT, () => {
  console.log("Server is up on PORT", PORT);
});
