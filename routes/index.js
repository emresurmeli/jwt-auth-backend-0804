const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verify-token.js")

const authController = require("../controllers/auth.js");
const usersController = require("../controllers/users.js");
const testJwtController = require("../controllers/test-jwt.js");

router.use("/auth", authController);
router.use("/test-jwt", testJwtController);
router.use(verifyToken);
router.use("/users", usersController);

module.exports = router;
