import { whatsappWebClientFactory } from "../../client/factories";
import { startHandlers } from "../../client/handlers";

function whatsappWebJsBootstrap() {
  const client = whatsappWebClientFactory();

  startHandlers(client);

  client.initialize();
}

export { whatsappWebJsBootstrap };
