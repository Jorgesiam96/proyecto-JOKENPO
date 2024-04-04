
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
  const sorte = Math.floor(Math.random() * 3)
                                              
  return jugada[sorte]                      
}                                            

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
