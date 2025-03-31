const express = require("express");
// const { registerUser, loginUser } = require("../controllers/auth.js");

const router = express.Router();

// router.post("/register", registerUser);
// router.post("/login", loginUser);


router.get("/login", (req, res) => {
    res.send("Auth Route Working ✅");
});

module.exports = router;
