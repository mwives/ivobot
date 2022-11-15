import { WaWebJsMessageHelper } from "../helpers";

async function aninhaMessageHandler(messageHelper: WaWebJsMessageHelper) {
  await messageHelper.conditionallyReply(
    "!cookies",
    "Ivobot 🤖: Tome aqui seu cookies 🍪"
  );
}

export { aninhaMessageHandler as baldezMessageHandler };
