import { WaWebJsMessageHelper } from "../helpers";

async function meMessageHandler(messageHelper: WaWebJsMessageHelper) {
  await messageHelper.conditionallyReply(
    "!cookies",
    "Ivobot 🤖: Você não pode ter cookies 🤡"
  );
}

export { meMessageHandler };
