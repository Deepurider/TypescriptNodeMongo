import express from "express";
import { json } from "body-parser";
import { connectToDatabase } from "./config/database-config";
import { User } from "./model/user";

connectToDatabase();
const app = express();
app.use(json());
app.listen(3000, () => {
  console.log("Server is listening  on port 3000");
});

const routes = express.Router();
routes.get("/", (req, res) => {
  return res.sendFile(__dirname + "/static/index.html");
});
app.use(routes);

const adminRoutes = express.Router();
adminRoutes.get("/api/user", async (req, res) => {
  const { id } = req.query;
  const users = await User.find(id ? { _id: id } : {});
  return res.json(users);
});

adminRoutes.put("/api/user", async (req, res) => {
  const { firstName, lastName, id } = req.body;
  const users = await User.find({ _id: id }).updateOne(
    {},
    { firstName: firstName, lastName: lastName }
  );
  return res.json(users);
});

adminRoutes.post("/api/user", async (req, res) => {
  const { firstName, lastName } = req.body;
  const user = User.build({
    firstName: firstName,
    lastName: lastName,
  });
  await user.save();
  return res.json({
    firstName: firstName,
    lastName: lastName,
  });
});

adminRoutes.delete("/api/user", async (req, res) => {
  const { id } = req.query;
  const users = await User.find({ _id: id }).deleteOne();
  return res.json(users);
});
app.use(adminRoutes);
