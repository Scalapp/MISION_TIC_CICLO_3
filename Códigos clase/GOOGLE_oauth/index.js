const express = require("express");
//const { session } = require("passport");
const passport = require("passport");
const session =require("express-session")

require("./auth");

const app = express();
app.use(session({secret:"cat"}));
app.use(passport.initialize());
app.use(passport.session());

//midleware function 
function estalogeado(req, res, next) {
   req.user ? next() : res.sendStatus(401);
}


app.get("/",
    (req, res) => {
        res.send('<a href="/auth/google"> Autenticarse con google</a>');
    }
);
app.get("/auth/google", passport.authenticate("google", { scope: ["email", "profile"] }));


app.get("/auth/google/callback",
    passport.authenticate(
        "google", {
        successRedirect: "/protegido",
        failureRedirect: "/auth/failure",
    })
);

app.get("/auth/failure", (req, res) => {
    res.send("Algo salió mal en la autenticación de google '<a href=\"/\"> regresar</a>'");
});

app.get("/protegido", estalogeado, (req, res) => {
        res.send(`esto es un sitio protegido pero ${req.user} tienes permiso <a href=\"/\"> regresar</a> <br> <a href=\"/logout\">logout</a>`);

    });

    app.get("/logout", (req, res) => {
        req.logout();
        req.session.destroy();
        res.send("hasta la vista bb");

    });

app.listen(3000, () => console.log("escuchando en el puerto 3000"));
