let jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
    if (req.originalUrl === "/api/userAuthenticate") next();
    else {
        jwt.verify(req.headers['x-access-token'], 'kabali-rajini-basha', function(err, decoded) {
            if (err) {
                res.send({
                    err
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    }
};
