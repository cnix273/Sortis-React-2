// This is middleware for restrictng routes a user is not allowed to visit if not logged in
module.exports = function (req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
 
  if (req.body.isAuth) {
    return next();
  }

  if (!req.body.isAuth) {
    console.log('unAuthenticated', 'Sorry, you must be logged in to see that', );
    res.render('/search');
    return;
  }
};