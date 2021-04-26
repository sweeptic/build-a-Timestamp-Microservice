const path = require('path');

exports.getHello = (req, res, next) => {
  res.json({ greeting: 'hello API' });
};
