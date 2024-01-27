const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());
const PORT = 4000;

app.post("/hostaway-webhook", async (req, res) => {
  const url = "https://api.schlage.com/";

  try {
    const { data } = await axios.post(url, {
      /* Body */
    });
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
