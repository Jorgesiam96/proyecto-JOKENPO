
const jugador = document.querySelector('#humano-score')
const compu = document.querySelector('#alexa-score')
const resultado = document.querySelector('.resultado')
let yo = 0
let pc = 0


const usuario1 = (player1) => {
  play(player1, maquina())
}

const maquina = () => {
  const jugada = ['piedra', 'papel', 'tijera']
  const sorte = Math.floor(Math.random() * 3) // Math.randon = a un numero de o - 1(padrao)
  // ese numero lo multiplico por 3 y var dar un valor de 0 - 2,9
  return jugada[sorte]                       // despues coloco Math.floor que redonde el numero hacia abajo 
}                                            // el resultado es de 0 - 2  (0,1,2)

const play = (humano, alexa) => {
  console.log(humano, alexa)

  if (humano === alexa) {
    resultado.innerHTML = "Deu Empate!"

  }
  else if ((humano === 'papel' && alexa === 'piedra') ||
    (humano === 'piedra' && alexa === 'tijera') ||
    (humano === 'tijera' && alexa === 'papel')) {
    yo++
    jugador.innerHTML = yo
    resultado.innerHTML = "Você Ganhou!"
  }
  else {
    pc++
    compu.innerHTML = pc
    resultado.innerHTML = "Você Perdio Para Alexa!"
  }


}
