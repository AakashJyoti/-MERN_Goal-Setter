const express = require("express");
const {
  getGoals,
  putGoal,
  postGoals,
  deleteGoal,
} = require("../controllers/goalController");
const router = express.Router();

router.route("/").get(getGoals).post(postGoals);
router.route("/:id").put(putGoal).delete(deleteGoal);

module.exports = router;
