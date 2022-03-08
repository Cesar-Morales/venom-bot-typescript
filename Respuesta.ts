function Respuesta(client:any, message:any) {
    client.sendText(message.from, 'Bienvenido al nuevo mundo')
      .then((result:any) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro:any) => {
        console.error('Error when sending: ', erro); //return object error
      });
}

export default Respuesta;
