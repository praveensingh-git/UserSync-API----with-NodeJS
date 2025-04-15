const User = require('../Models/user');

async function handleGetAllUsers(req, res) {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch users" });
  }
}

async function handleGetUserByID(req, res) {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ msg: "User not found" });
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ error: "Something went wrong", detail: err.message });
  }
}

async function handleUpdateUserByID(req, res) {
  const id = req.params.id;
  try {
    const updates = req.body;
    const user = await User.findByIdAndUpdate(id, updates, { new: true });
    if (!user) return res.status(404).json({ msg: "User not found" });
    return res.json({ status: "Success", data: user });
  } catch (error) {
    return res.status(500).json({ msg: "Update failed", detail: error.message });
  }
}

async function handleDeleteUserByID(req, res) {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ msg: "User not found" });
    return res.json({ status: "Success" });
  } catch (error) {
    return res.status(500).json({ msg: "Deletion failed", detail: error.message });
  }
}

async function handleCreateNewUser(req, res) {
  const body = req.body;
  if (
    !body ||
    !body.firstName ||
    !body.lastName ||
    !body.email ||
    !body.age ||
    !body.gender ||
    !body.profession
  ) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  try {
    const user = await User.create({
      firstName: body.firstName,
      lastName: body.lastName,
      age: body.age,
      email: body.email,
      gender: body.gender,
      profession: body.profession,
    });
    return res.status(201).json({ msg: "User Created", data: user });
  } catch (error) {
    return res.status(500).json({ msg: "Internal server error", detail: error.message });
  }
}

module.exports = {
  handleGetAllUsers,
  handleGetUserByID,
  handleUpdateUserByID,
  handleDeleteUserByID,
  handleCreateNewUser
};
