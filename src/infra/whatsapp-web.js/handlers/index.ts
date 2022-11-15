import { Client } from "whatsapp-web.js";

import { clientHandlerFactory } from "./client.handler";
import { messageHandlerFactory } from "./message.handler";
import { qrHandlerFactory } from "./qr.handler";

function startHandlers(client: Client) {
  qrHandlerFactory(client);
  clientHandlerFactory(client);
  messageHandlerFactory(client);
}

export { startHandlers };
