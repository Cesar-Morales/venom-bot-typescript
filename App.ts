// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');
import Respuesta from './Respuesta';
venom
  .create()
  .then((client:any) => startVenom(client))
  .catch((erro:any) => {
    console.log(erro);
  });

function startVenom(client:any) {

  client.onMessage((message:any) => {
    const msg = message.body.toLowerCase();
    if (msg == 'hola mundo') {
      Respuesta(client, message)
    }
  });

}

