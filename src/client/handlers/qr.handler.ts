import { Client } from "whatsapp-web.js";
import { QrCodeTerminal } from "../../shared/providers";

function qrHandlerFactory(client: Client) {
  return client.on("qr", (qr) => {
    QrCodeTerminal.generate(qr);
  });
}

export { qrHandlerFactory };
