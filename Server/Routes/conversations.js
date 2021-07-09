const router = require("express").Router();
const Conversation = require("../Models/Conversation");

router.post("/", async (req, res) => {
  console.log("conversation api");
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });

  console.log(newConversation);

  try {
    const savedConversation = await newConversation.save();
    console.log(SavedConversation);
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
