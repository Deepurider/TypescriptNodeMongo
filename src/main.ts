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
  // const userId = "659d7627fad7d552d967e766";
  // const contactId = "659d7627fad7d552d967e767";
  // const addressId = "659d7627fad7d552d967e768";
  // const updateData = "This is updated Data";

  const users = await User.find({ _id: id }).updateOne(
    {},
    { firstName: firstName, lastName: lastName }
  );

  // update data with nested child node.
  // const updatedUser = await User.updateOne(
  //   {
  //     _id: userId,
  //     "contacts._id": contactId,
  //     "contacts.addresses._id": addressId,
  //   },
  //   {
  //     $set: {
  //       "contacts.$.addresses.$[addr].addressLine1": "This is address line 2",
  //       "contacts.$.addresses.$[addr].addressLine2": "This is address line 1",
  //     },
  //   },
  //   {
  //     arrayFilters: [
  //       {
  //         "addr._id": addressId,
  //       },
  //     ],
  //   }
  // );
  return res.json(users);
});

adminRoutes.post("/api/user", async (req, res) => {
  const { firstName, lastName } = req.body;
  const user = await User.build(req.body).save();
  return res.json(user);
});

adminRoutes.delete("/api/user", async (req, res) => {
  const { id } = req.query;
  const users = await User.find({ _id: id }).deleteOne();
  return res.json(users);
});
app.use(adminRoutes);
