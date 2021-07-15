class Common {
  setResponse = (res, status, message) => {
    return res.status(status).json({
      message,
    });
  }
}
module.exports = Common;
