const logRequest = (req, res, next) => {
  console.log('Terjadi request ke PATH : ', req.path, req.method);
  next();
};

module.exports = logRequest;
