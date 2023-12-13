require('dotenv').config();
const PORT = process.env.PORT || 5000;
const express = require('express');
const app = express();

const usersRoutes = require('./routes/users.js');
const middlewareLogRequest = require('./middleware/logs.js');
const upload = require('./middleware/multer.js');

app.use((req, res, next) => {
  console.log('log terjadi request di api ini');
  next();
});

app.use(middlewareLogRequest);
app.use(express.json());
app.use('/assets', express.static('public/images'));
app.post('/upload', upload.single('photo'), (req, res) => {
  res.json({
    message: 'upload berhasil',
  });
});
app.use('/users', usersRoutes);

app.use((err, req, res, next) => {
  res.json({
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`server berhasil di running di port ${PORT}`);
});
