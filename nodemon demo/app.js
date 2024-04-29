const http = require("http");
const server = http.createServer((req, res) => {
  res.end("hola mundo xd xd");
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`el servidor escuchando en el puerto ${PORT}`);
});
