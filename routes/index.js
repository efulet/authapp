'use strict'

module.exports = function(app) {
  // Render the home page.
  app.get('/', function(req, res, next) {
    res.render('index', {
      title: 'Autenticacion con Node.js'
    });
  });

  // Render the profile page.
  app.get('/profile', isLoggedIn, function (req, res, next) {
    res.render('profile', {
      title: 'Autenticacion con Node.js',
      user: req.user
    });
  });

  // :-D
  app.get('/ping', function (req, res, next) {
    const url = "http://www.10puntos.com/wp-content/uploads/2011/09/bender-421572.jpeg"
    res.status(200).send("<img src='" + url + "' />");
  });

  // Route middleware to make sure a user is logged in
  function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
      return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
  }
};
