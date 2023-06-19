const express = require("express");
const router = express.Router();

router.post("/", async (req, res, next) => {
  const data = await fetch(req.body?.url, {
    method: "POST",
    headers: {
      Accept: "application.json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return res.status(200).json({
    returnUrl: data,
    message: "this is the data",
  });
});

module.exports = router;
