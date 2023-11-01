import { connectToDatabase } from "./db";

export const fetchData = async () => {
  // Connect to db
  let client;
  try {
    client = await connectToDatabase();
    const db = client.db();

    const data = await db
      .collection("data")
      .find()
      .project({ _id: 0 })
      .toArray();

    return data;
  } catch (error) {
    return error;
  }
};
