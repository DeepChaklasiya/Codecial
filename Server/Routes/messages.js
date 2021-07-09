const router = require("express").Router();
const Message = require("../Models/Message");

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    return res.status(505).json(err);
  }
});

module.exports = router;
