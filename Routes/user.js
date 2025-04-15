const express = require("express");
const {
  handleGetAllUsers,
  handleGetUserByID,
  handleUpdateUserByID,
  handleCreateNewUser,
  handleDeleteUserByID,
} = require("../Controllers/user");

const router = express.Router();

router.route("/")
.get(handleGetAllUsers)
.post(handleCreateNewUser);

router
  .route("/:id")
  .get(handleGetUserByID)
  .patch(handleUpdateUserByID)
  .delete(handleDeleteUserByID);

module.exports = router;
