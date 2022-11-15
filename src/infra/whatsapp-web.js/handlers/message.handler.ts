import { Client } from "whatsapp-web.js";

import {
  aninhaMessageHandler,
  marcusMessageHandler,
  meMessageHandler,
} from "../messages/contacts";
import { olarHandler } from "../messages/groups";
import { WaWebJsMessageHelper } from "../messages/helpers";

function messageHandlerFactory(client: Client) {
  client.on("message_create", async (msg) => {
    const messageHelper = new WaWebJsMessageHelper(client, msg);

    messageHelper.conditionallyReply("ping", "pong");
    messageHelper.conditionallyReply("pong", "ping");

    if (msg.fromMe) {
      meMessageHandler(messageHelper);
    }

    const msgChat = await msg.getChat();
    const msgFromGroup = msgChat.isGroup;

    if (!msgFromGroup) {
      const contacts = {
        ["Baldez"]: () => aninhaMessageHandler(messageHelper),
        ["Marcus Vinicius Batista Siqueira"]: () =>
          marcusMessageHandler(messageHelper),
      };

      const contactName = (await msg.getContact()).name;
      const contactHandler = contacts[contactName as keyof typeof contacts];

      if (contactName && contactHandler) {
        contactHandler();
      }
    } else {
      const [, groupId] = msgChat.id._serialized.split("-");
      const groups = [
        {
          id: "1490453181@g.us",
          name: "Olar",
          handler: olarHandler,
        },
      ];

      const group = groups.find((group) => group.id === groupId);

      if (group) {
        group.handler(messageHelper);
      }
    }
  });
}

export { messageHandlerFactory };
