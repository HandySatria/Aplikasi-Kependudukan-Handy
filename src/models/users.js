const dbpool = require('../config/database');

const getAllUsers = () => {
  console.log('masuk db sql');
  const query = 'select * from users';

  return dbpool.execute(query);
};

const createNewUsers = (body) => {
  const query = `insert into users (username, email, address) values('${body.username}', '${body.email}', '${body.address}')`;

  return dbpool.execute(query);
};

const updateUsers = (body, idUser) => {
  const query = `update users 
                set username = '${body.username}', email = '${body.email}', address = '${body.address}'
                where iduser = '${idUser}'`;
  return dbpool.execute(query);
};

const deleteUser = (idUser) => {
  const query = `delete from users where iduser = ${idUser}`;
  return dbpool.execute(query);
};

module.exports = {
  getAllUsers,
  createNewUsers,
  updateUsers,
  deleteUser,
};
