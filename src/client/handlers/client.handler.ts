import { Client } from "whatsapp-web.js";

function clientHandlerFactory(client: Client) {
  return client.on("ready", () => {
    console.log("Client is ready!");
  });
}

export { clientHandlerFactory };
