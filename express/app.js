//express = el framework web mas popular de node.js
//caracteristicas
//routing
// enfocado en alto remdimiento
// nos permite desarrollar aplicaciones de Node.js mas rapidamente con codigo mas conciso

//crud = ACRONIMO DE LAS OPERACIONES BASICAS QUE PODEMOS HACER CON LA INFORMACION ALMACENADA
// create POST,read GET, update PUT, delete DELETE

//api= aplication programming Interface / interfaz de programacion de aplicaciones
//tipo de interfaz de sofware que permite que dos o mas programas se comuniqube entre si
//permite desarrollar un software que ofresca servicio a otro software

//lo primero que se pone
const express = require("express");

const app = express();
const { data } = require("./data.js");

app.use(express.json());

// console.log(data);

//routing = direcionamiento o enrutamiento

app.get("/", (req, res) => {
  res.send("server express");
});
// estamos creando la ruta
app.get("/api/data", (req, res) => {
  res.send(data);
});

//estamos creando la ruta para acceder a una propiedad dentro del objeto

//toda esta parte se puede usar usando los parametros url

app.get("/api/data/data1", (req, res) => {
  res.send(data.data1);
});
app.get("/api/data/data2", (req, res) => {
  res.send(data.data2);
});

//parametros de ruta
//como manejar las solicitudes de busqueda
//ParametrosURL = generalizar esntre tispos de valores

//genesarlizamos los que esta dentro de data con los dos puntos : y ponemos el
//nombre que los definan en este caso parametro cada vez cambia

app.get("/api/data/data1/:parametro/:id", (req, res) => {
  const parametro = req.params.parametro; //creando constante parametro que nos pasa el usuario
  const id = parseInt(req.params.id); //creando paramero id nos la pasa el usuario
  const resultados = data.data1.filter(
    (data) => data.message === parametro && data.id === id
  );

  if (resultados.length === 0) {
    return res.status(404).send(`Not fount ${parametro} con id ${id}`);
  }
  res.send(JSON.stringify(resultados));
});

app.post("/api/data/data1/", (req, res) => {
  let newData = req.body;
  data.data1.push(newData);
  res.send(JSON.stringify(data));
  console.log("usuario creado");
});

const PORT = process.env.port || 3000;

app.listen(PORT);
