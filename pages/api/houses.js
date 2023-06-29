import { mongooseConnect } from "@/lib/mongoose";
import { House } from "@/modals/Houses";
import mongoose from "mongoose";

export default async function handler(req, res) {
  const { method } = req;
  /* mongoose.connect(clientPromise.url) */
  /* mongoose.Promise = clientPromise; */
  await mongooseConnect();
  if (method === "POST") {
    const { title, location, description, rent } = req.body;
    const houseDoc = await House.create({
      title,
      location,
      description,
      rent,
    });
    res.json(houseDoc);
  }
}
