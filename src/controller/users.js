const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();
    res.json({
      message: 'Get all users success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'server error',
      serverMessage: error,
    });
  }
};

const createNewUsers = async (req, res) => {
  const { body } = req;

  if (!body.username || !body.email || !body.address) {
    return res.status(400).json({
      message: 'data kurang lengkap',
      data: null,
    });
  }
  try {
    await UsersModel.createNewUsers(body);
    res.status(201).json({
      message: 'create new users success',
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: 'server error',
      serverMessage: error,
    });
  }
};

const updateUsers = async (req, res) => {
  const { idUser } = req.params;
  const { body } = req;
  try {
    await UsersModel.updateUsers(body, idUser);
    res.json({
      message: 'update users success',
      data: {
        iduser: idUser,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: 'server error',
      serverMessage: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { idUser } = req.params;
  try {
    await UsersModel.deleteUser(idUser);
    res.json({
      message: 'delete user success',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: 'server error',
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllUsers,
  createNewUsers,
  updateUsers,
  deleteUser,
};
