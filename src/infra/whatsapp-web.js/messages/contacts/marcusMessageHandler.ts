import { WaWebJsMessageHelper } from "../helpers";

async function marcusMessageHandler(messageHelper: WaWebJsMessageHelper) {
  await messageHelper.conditionallyReply("bolsonaro", "MITO!! 🇧🇷");
}

export { marcusMessageHandler };
