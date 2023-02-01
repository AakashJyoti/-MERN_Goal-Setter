const asyncHandler = require("express-async-handler");

// @desc get goals
// @route GET /api/goals
// @access Private

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "GET GOALS" });
});

// @desc set goal
// @route POST /api/goals
// @access Private
const postGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "SET GOALS" });
});

// @desc update goal
// @route PUT /api/goal/:id
// @access Private
const putGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Goal in ${req.params.id}` });
});

// @desc delete goal
// @route DELETE /api/goal/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Goal in ${req.params.id}` });
});

module.exports = {
  getGoals,
  postGoals,
  putGoal,
  deleteGoal,
};
