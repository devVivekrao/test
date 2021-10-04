const { connectToDatabase } = require("../../middleware/database");
const ObjectId = require("mongodb").ObjectId;

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case "GET": {
      return getConatct(req, res);
    }

    case "POST": {
      return addContact(req, res);
    }

    case "PUT": {
      return updateContact(req, res);
    }

    case "DELETE": {
      return deleteContact(req, res);
    }
  }
}

// Adding a new contact
async function addContact(req, res) {
  try {
    let { db } = await connectToDatabase();
    await db.collection("contact_collection").insertOne(JSON.parse(req.body));
    return res.json({
      message:
        "Thanks for sending a message. We got your request, we will get back to you very soon :)",
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
