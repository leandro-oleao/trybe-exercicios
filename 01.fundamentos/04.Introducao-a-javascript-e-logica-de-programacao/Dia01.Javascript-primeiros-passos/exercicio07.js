let notaFinal = 60;

if (notaFinal < 1 || notaFinal > 100) {
  console.log("Erro, nota não possível");
} else if (notaFinal >= 90) {
  console.log("Nota A");
} else if (notaFinal >= 80) {
  console.log("Nota B");
} else if (notaFinal >= 70) {
  console.log("Nota C");
} else if (notaFinal >= 60) {
  console.log("Nota D");
} else if (notaFinal >= 50) {
  console.log("Nota E");
} else if (notaFinal < 50 && notaFinal > 0) {
  console.log("Nota F");
}