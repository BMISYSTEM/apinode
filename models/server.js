const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const sockets = require('./sockest');
class server {
    constructor(){
        this.app = express(); 
        this.port = process.env.PORT;
        // http server
        this.server = http.createServer(this.app)
        // configuracion de sockets
        this.io = socketio(this.server,{/**configuraciones como latencia o times */})
    }

    /**
     *  ejecutar servidor
     */
    exexute(){
        //inicializar middlewares
        this.middlewares();
        // ejecutamos el sockets
        this.configuraSockets();
        this.server.listen(this.port,()=>{
            console.log('servidor corriendo desde classe server');
        })
    }
    /**
     * directorios y scrips
     */
    middlewares(){
        //desplegar el directorio publico
        this.app.use(express.static(path.resolve( __dirname , '../public')))
    }
    //configurar sockets
    configuraSockets(){
        new sockets(this.io);
    }
}

module.exports = server;