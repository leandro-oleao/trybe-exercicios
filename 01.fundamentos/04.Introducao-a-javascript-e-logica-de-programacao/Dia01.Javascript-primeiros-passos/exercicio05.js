const angulo01 = -90;
const angulo02 = 50;
const angulo03 = 50;

if (angulo01 < 1 || angulo02 < 1 || angulo03 < 1) {
  console.log("Erro! Valor inválido");
} else if (angulo01+angulo02+angulo03 === 180) {
  console.log(true);
} else if (angulo01+angulo02+angulo03 > 180 || angulo01+angulo02+angulo03 < 180) {
  console.log(false);
}
