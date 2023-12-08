const Server = require('./models/server');
require('dotenv').config();
// instanciamos 
const server = new Server();
server.exexute();

// // servidor de express
// const express = require('express');
// const app = express();
// // servidor de sockets
// const servidor = require('http').createServer(app);
// // configuracion del socket io
// const io = require('socket.io')(servidor);
// // desplegar directorio
// app.use(express.static(__dirname + '/public'))

// io.on('connection', (socket) => { 
//     socket.emit('mensaje-bienvenida',{
//         msg:'Bienvenido al socket .io',
//         fecha: new Date()
//     })
//     //recibir mensje del cliente emitido por el backend
//     socket.on('mensaje-cliente',(data)=>{
//         console.log(data)
//     })
//     socket.on('mensaje-to-server',(data)=>{
//         console.log(data)
//         io.emit('mensaje-from-server',data)
//     })
// });
// servidor.listen(8080,()=>{
//     console.log('corriendo en el puerto 8080')
// });