import { Client } from "whatsapp-web.js";

function whatsappWebClientFactory() {
  return new Client({
    puppeteer: {
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    },
  });
}

export { whatsappWebClientFactory };
