import { WaWebJsMessageHelper } from "../helpers";

async function meMessageHandler(messageHelper: WaWebJsMessageHelper) {
  await messageHelper.conditionallyReply(
    "!cookies",
    "Você não pode ter cookies 🤡"
  );
}

export { meMessageHandler };
