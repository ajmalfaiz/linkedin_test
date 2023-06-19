const express = require("express");
const fetch = require('node-fetch');
const router = express.Router();

router.post("/", async (req, res, next) => {
  console.log(req?.body);
  try {
    const response = await fetch(req.body?.url, {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const data = await response.json();
    return res.json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: error });
  }
});

module.exports = router;
