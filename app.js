// MODULO CONSOLE = console.error(new Error("ocurrio un error")); el modulo console tiene varias formas .error .log console.info console.warn console.debug
// MODULO PROCESS = el modulo process  contiene toda la informacion de lo que estamos ejecutando como la memoria que estamos usando o los valores que estamos usando
//  MODULO OS = Contiene informacionde sistema operativo HAY QUE IMPORTARLO CON REQUIERE
// MODULO TIMERS = Contiene funciones que ejecutan un codigo luego de cierto tiempo  setTimeout(funcion,retaso(ms),argumento(lo que nesesita la funcion) puedo poner mas argumentos los importantes son los dos primeros) espera una cantidad de tiempo en ms
// MODULO FS(file system) = Contiene funciones que nos permiten ineterctuar con los arvhivos del sistema (leer ,modificar, copiar , eliminar ,cambiar nombre ) todos los modulos son asincronos

// creacion de server

//1. importar el modulo http
const http = require("http");

//2. creacion de constante y usar el metodo createServer le pasamos los parametros req(request solicitid) res(response respuesta) representan en nustro codigo la solicitud que resibio del cliente y la respuesat que le voy a dar
const server = http.createServer((req, res) => {
  console.log(req.method);
  const { method } = req;
  console.log(method);
  switch (method) {
    case "GET":
      manageGETResquest(req, res);

      break;
    case "POST":
      managePOSTResquest(req, res);

    case "PUT":
      managePUTResquest(req, res);

    case "DELETE":
      manageDELETEResquest(req, res);

    default:
      console.log("metodo usado no es co patible" + method);
      break;
  }

  //3.en esta linea estamos enviando la respuesta al cliente por el metodo end
});

//se requiere un puerto pata que la solicilud y el mensaje sepan como comunicarse
// port = ubicacion virtual del sistema operativo en la cual se puede acceder a una aplicacion o a un proceso especifico que se
// este ejecutando en ese puerto

//como hacer que el servidor sepa donde escuchar (esperar la response o la solicitud)
server.listen(3000, () => {
  //asignamos que escuche en el puerto 3000 y le pasasmos una funcion en este caso flecha para que haga lo que nosotros
  //nesesitemos en ese momento
  console.log("servidor escuchando...");
});

//URL(Uniform Resource Locator /localisador uniforme de recursos )= Drireccion de recurso en la web mapa hacia ese recurso

function manageGETResquest(req, res) {
  const path = req.url;

  if (path === "/") {
    res.statusCode = 200;
    return res.end("biendenido a mi server");
  } else if (path === "/cursos") {
    res.statusCode = 200;
    return res.end("aqui puedo poner objetos");
  }
}

function managePOSTResquest(req, res) {
  const path = req.url;
  if (path === "/") {
    let body = "";
    req.on("data", (contenido) => {
      body += contenido.toString();
    });
    req.on("end", () => {
      console.log(body);
      console.log(typeof body);

      //convertir a un objeto de javascript
      body = JSON.parse(body);
      res.end("el servidor resibio una solicitud POST en /");
    });

    res.statusCode = 200;
    // return res.end("biendenido a mi server");
  }
}
function managePUTResquest(req, res) {
  const path = req.url;
  if (path === "/") {
    res.statusCode = 200;
    return res.end("biendenido a mi server");
  }
}

function manageDELETEResquest(req, res) {
  const path = req.url;
  if (path === "/") {
    res.statusCode = 200;
    return res.end("biendenido a mi server");
  }
}

//nodemon = Herramienta que reinicia la aplicacion de node.js cuendo detects algun cambio .
