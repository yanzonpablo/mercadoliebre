const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

// app.listen(PORT, () => {
//     console.log("Estamos corriendo en el puerto " + PORT);
// });

app.listen(process.env.PORT || 3000, function() {
  console.log('Servidor corriendo en el puerto 3000')
});


app.use(express.static(path.join(__dirname, "public")));

// ruta
app.get('/', (req, res) => {
    //funcion controladora
    res.sendFile(path.join(__dirname, "views/home.html"));
});

app.get('/register', (req, res) => {
    //funcion controladora
    res.sendFile(path.join(__dirname, "views/register.html"));
});
app.get("/login", (req, res) => {
  //funcion controladora
  res.sendFile(path.join(__dirname, "views/login.html"));
});