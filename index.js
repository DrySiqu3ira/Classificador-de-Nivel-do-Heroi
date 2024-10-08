const readline = require("readline-sync");

while (true) {
  let name = readline.question(
    "Digite o nome do herói (ou 'sair' para encerra):"
  );

  if (name.toLowerCase() === "sair") {
    break;
  }

  let XP = parseInt(readline.question("Digite a quantidade de XP do herói:"));

  if (isNaN(XP) || XP < 0) {
    console.log("XP não pode ser negativo. Tente novamente.");
    continue;
  }

  let nivel;

  if (XP < 1000) {
    nivel = "Ferro";
  } else if (XP >= 1001 && XP <= 2000) {
    nivel = "Bronze";
  } else if (XP >= 2001 && XP <= 5000) {
    nivel = "Prata";
  } else if (XP >= 5001 && XP <= 7000) {
    nivel = "Ouro";
  } else if (XP >= 7001 && XP <= 8000) {
    nivel = "Platina";
  } else if (XP >= 8001 && XP <= 9000) {
    nivel = "Ascendente";
  } else if (XP >= 9001 && XP <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  console.log(`O Herói de nome ${name} está no nível de ${nivel}`);
}
