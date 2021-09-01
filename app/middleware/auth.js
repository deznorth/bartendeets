
exports.authRequired = function (req, res, next) {
  if (req.cookies?.currentUser) {
    res.cookie('currentUser', req.cookies.currentUser, { maxAge: 15 * 60 * 1000 }); // Extend current session
    next();
  } else {
    res.status(401).send({
      error: 'Must be authenticated',
    });
  }
}
