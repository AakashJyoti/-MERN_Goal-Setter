const express = require("express");
const {
  getGoals,
  putGoal,
  postGoals,
  deleteGoal,
} = require("../controllers/goalController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getGoals).post(protect, postGoals);
router.route("/:id").put(protect, putGoal).delete(protect, deleteGoal);

module.exports = router;
