/* eslint-disable require-jsdoc */
/* eslint-disable func-style */
const authController = require('../controllers/authcontroller');

module.exports = (app, passport) => {
    app.get('/signup', authController.signup);

    app.get('/login', authController.login);

    app.get('/profile', isLoggedIn, authController.profile);

    app.get('/logout', authController.logout);

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile',
        failuteRedirect: '/signup',
        failureFlash: true
    }));

    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true
    }));

    // eslint-disable-next-line consistent-return
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/login');
    }
};
