import { Client } from "whatsapp-web.js";
import {
  baldezMessageHandler,
  marcusMessageHandler,
  meMessageHandler,
} from "../messages/contacts";
import { WaWebJsMessageHelper } from "../messages/helpers";

function messageHandlerFactory(client: Client) {
  client.on("message_create", async (msg) => {
    const messageHelper = new WaWebJsMessageHelper(client, msg);

    messageHelper.conditionallyReply("ping", "pong");
    messageHelper.conditionallyReply("pong", "ping");

    if (msg.fromMe) {
      meMessageHandler(messageHelper);
      return;
    }

    const contacts = {
      ["Marcus Vinicius Batista Siqueira"]: () =>
        marcusMessageHandler(messageHelper),

      ["Baldez"]: () => baldezMessageHandler(messageHelper),
    };

    const contactName = (await msg.getContact()).name;
    const contactHandler = contacts[contactName as keyof typeof contacts];

    if (contactName && contactHandler) {
      contactHandler();
    }
  });
}

export { messageHandlerFactory };
