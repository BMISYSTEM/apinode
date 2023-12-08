class sockets{
    /**
     * contiene la instancia de socket del server
     * @param {instancia} io 
     */
    constructor(io){
        this.io = io;
        this.socketsEvents();
    }
    /**
     * ejecuta los eventos como emit o on del lado del servidor
     */
    socketsEvents(){
        this.io.on('connection', (socket) => { 
            socket.on('mensaje-to-server',(data)=>{
                console.log(data)
                this.io.emit('mensaje-from-server',data)
            })
        });
    }
}

module.exports = sockets;