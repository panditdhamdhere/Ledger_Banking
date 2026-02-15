const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

// post - /api/account/
// create a new account
// protected acount

router.post("/", authMiddleware.authMiddleware);

module.exports = router;
