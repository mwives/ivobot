import { Client } from "whatsapp-web.js";

function messageHandlerFactory(client: Client) {
  return client.on("message", (msg) => {
    if (msg.body === "ping") {
      msg.reply("pong");
    }
  });
}

export { messageHandlerFactory };
