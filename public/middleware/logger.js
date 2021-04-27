// import moment
const moment = require('moment');

// middleware function
const logger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get('host')}${
      req.originalUrl
    } - logged @${moment().format()}`
  );
  next();
};

module.exports = logger;
