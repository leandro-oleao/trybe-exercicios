function listOfStates() {
let listaEstados = document.getElementById('estadosBrasileiros'); 
let estados = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']

for (let i = 0; i < estados.length; i += 1){
  let opcaoEstado = document.createElement('option');
  opcaoEstado.innerText = estados[i];
  opcaoEstado.value= estados[i];
  listaEstados.appendChild(opcaoEstado);
}
}
listOfStates();