
exports.authRequired = function (req, res, next) {
  if (req.cookies?.currentUser) {
    next();
  } else {
    res.status(401).send({
      error: 'Must be authenticated',
    });
  }
}
