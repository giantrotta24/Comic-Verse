module.exports = {
    signup: (req, res) => {
        res.render('signup');
    },
    login: (req, res) => {
        res.render('login');
    },
    profile: (req, res) => {
        res.render('profile');
    },
    logout: (req, res) => {
        req.session.destroy((err) => {
            res.redirect('/');
        });
    }
}