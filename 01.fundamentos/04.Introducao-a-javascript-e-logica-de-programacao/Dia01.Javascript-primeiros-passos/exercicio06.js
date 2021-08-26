let pecadexadrez = "REI"

switch (pecadexadrez.toLowerCase()) {
  case ("torre"):
    console.log("Se move para frente e para trás");
    break;

  case "bispo":
    console.log("Se move na diagonal");
    break;

  case "cavalo":
    console.log("Se move em 'L' no tabuleiro");
    break;

  case "rainha":
    console.log("Se move quantas casas quiser para qualquer lado");
    break;

  case "rei":
    console.log("Se move apenas 1 casa em qualquer direção");
    break;

  case "peao":
    console.log("se move somente para a frente");
    break;

  default:
    console.log("Peça não existe");
}