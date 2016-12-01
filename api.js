let jwt = require("jsonwebtoken");
let router = require("express").Router();

router.use(require("./security-layer"));

router.get("/userAuthenticate", function(req, res) {
    let token = jwt.sign({
        name: "Sasireka"
    }, 'kabali-rajini-basha', {
        "expiresIn": "24h" // expires in 24 hours
    });
    res.send({
        token
    });
});

router.get("/getusers", function(req, res) {
    res.send(req.decoded);
});

module.exports = router;
