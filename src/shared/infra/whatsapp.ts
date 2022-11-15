import { whatsappWebClientFactory } from "../../infra/whatsapp-web.js/factories";
import { startHandlers } from "../../infra/whatsapp-web.js/handlers";

function whatsappWebJsBootstrap() {
  const client = whatsappWebClientFactory();

  startHandlers(client);

  client.initialize();
}

export { whatsappWebJsBootstrap };
