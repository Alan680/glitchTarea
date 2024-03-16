const express = require('express');
const app = express();
const PORT = process.env.PORT; //traigo la variable.

app.get('/',(req,res)=>{
    res.send(`<h1> Hola mundo</h1>`);
  
}

);

app.get('/form', (req,res) => {
    console.log("======================");
    console.log(req.url);
    console.log("======================");

    res.send(`

    <form>
    <p>
    Ingrese número de telefóno  <input type="text" value="número telefóno">
    <input type="submit" value="Enviar el formulario">
    <input type="reset" value="Eliminar datos">
    </p>
  </form>
  
  `);

});

app.get('/redirect', (req,res) => {
    console.log("======================");
    console.log(req.url);
    console.log("======================");

    res.redirect('..')

});




app.listen(PORT, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor Corriendo en el puerto http://localhost:${PORT}`);

});
