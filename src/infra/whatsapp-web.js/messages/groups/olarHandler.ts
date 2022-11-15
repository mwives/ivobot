import { WaWebJsMessageHelper } from "../helpers";

async function olarHandler(messageHelper: WaWebJsMessageHelper) {
  const pompilioAdjectives = [
    "O Maior 🌎",
    "Lei Maria da Penha 👀",
    "Cachaceiro 🥃",
    "Pombal 🐦",
    "Perna de Tronco 🪵",
  ];

  const kerubinAdjectives = ["Chifrudo 🐐", "Gostoso 🍆", "Só faz leg day 🦵"];

  const iboneiAdjectives = [
    "Inteligente 🧠",
    "Gostosa 🍑",
    "Musculoso 🏋️‍♂️",
    "Perninha de cachorro 🦵🐕",
  ];

  const caiobaAdjecives = [
    "Perfeito 🤩",
    "Anão 🧒",
    "Perninha de cachorro 🦵🐕",
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
