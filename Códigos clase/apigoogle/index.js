require("./auth");
const express = require("express");
const passport = require("passport");
const session = require("express-session");


const app = express()

app.use(session({secret:"secreto"}));
app.use(passport.initialize());
app.use(passport.session());




function estalogeado(req, res, next){
    req.user ? next() : res.sendStatus(401);
}



app.get("/", (req, res) => {
    res.send('<h1>Página de inicio</h1> <br> <a href="/auth/google">Autenticación con google</a>');
});

app.get("/protegido",estalogeado, (req, res) => {
    console.log(req.user)
    res.send(`<h1>Sitio protegido</h1> <br> hola ${req.user.email} <br> ${req.user.name.givenName} <br>${req.user.name.familyName}<br> <img src="${req.user.picture}"> <a href="/">Regresar</a> <br> <a href=\"/logout\">Finalizar session</a>`);
});

app.get("/auth/google/", passport.authenticate("google", { scope: ["email", "profile"] }));

app.get("/auth/google/callback",
    passport.authenticate("google", {
        successRedirect: "/protegido",
        failureRedirect: "/auth/failure",
    })

);
app.get("/auth/failure", (req, res) => {
    res.send("Algo salió mal en la autenticación de google '<a href=\"/\"> Regresar</a>'");

});

app.get("/logout",(req, res)=>{

    req.logOut();
    req.session.destroy();
    res.send("Se ha finalizado la sesión")
});


app.listen(3000, () => console.log("Escuchando desde el puerto 3000"));