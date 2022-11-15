import { WaWebJsMessageHelper } from "../helpers";

async function aninhaMessageHandler(messageHelper: WaWebJsMessageHelper) {
  await messageHelper.conditionallyReply(
    "!cookies",
    "Tome aqui seu cookies 🍪"
  );
}

export { aninhaMessageHandler };
