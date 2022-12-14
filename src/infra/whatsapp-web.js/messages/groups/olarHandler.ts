import { WaWebJsMessageHelper } from "../helpers";

async function olarHandler(messageHelper: WaWebJsMessageHelper) {
  const pompilioAdjectives = [
    "O Maior π",
    "Lei Maria da Penha π",
    "Cachaceiro π₯",
    "Pombal π¦",
    "Perna de Tronco πͺ΅",
  ];

  const kerubinAdjectives = ["Chifrudo π", "Gostoso π", "SΓ³ faz leg day π¦΅"];

  const iboneiAdjectives = [
    "Inteligente π§ ",
    "Gostosa π",
    "Musculoso ποΈββοΈ",
    "Perninha de cachorro π¦΅π",
  ];

  const caiobaAdjecives = [
    "Perfeito π€©",
    "AnΓ£o π§",
    "Perninha de cachorro π¦΅π",
  ];

  await messageHelper.conditionallyIncludeReply(
    "pombal",
    pompilioAdjectives[getRandomInt(pompilioAdjectives.length)]
  );

  await messageHelper.conditionallyIncludeReply(
    "kelvana",
    kerubinAdjectives[getRandomInt(kerubinAdjectives.length)]
  );

  await messageHelper.conditionallyIncludeReply(
    "ivonei",
    iboneiAdjectives[getRandomInt(iboneiAdjectives.length)]
  );

  await messageHelper.conditionallyIncludeReply(
    "caioba",
    caiobaAdjecives[getRandomInt(caiobaAdjecives.length)]
  );
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export { olarHandler };
