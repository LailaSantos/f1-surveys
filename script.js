// Função para atualizar o conteúdo com base na equipe selecionada
function updateTeamContent(team) {
  const logoTeam = document.getElementById("logoTeam")
  const logoPilot = document.getElementById("logoPilot")
  const h2 = document.getElementById("h2")
  const numeroP = document.getElementById("numeroP")
  const nacionalidadeP = document.getElementById("nacionalidadeP")
  const flagImg = document.querySelector(".flags img")
  const cardColor = document.getElementById("cardOne")

  const logoPilot2 = document.getElementById("logoPilotTwo")
  const h2Two = document.getElementById("h2Two")
  const numeroTwo = document.getElementById("numeroTwo")
  const nacionalidadeTwo = document.getElementById("nacionalidadeTwo")
  const flagImgTwo = document.querySelector(".flagsTwo img")
  const cardColorTwo = document.getElementById("cardTwo")

  if (team === "alfaRomeo") {
    logoTeam.src = "./photos/equipes/alfaromeo.png"
    logoPilot.src = "./photos/pilotos/bottas.png"
    h2.textContent = "Valtteri Bottas"
    numeroP.textContent = "Número: 77"
    nacionalidadeP.textContent = "Nacionalidade: Finlândia"
    flagImg.src = "./photos/bandeiras/finlandia.png"
    cardColor.style.borderLeft = "3px solid #b3404a"

    logoPilot2.src = "./photos/pilotos/zhou.png"
    h2Two.textContent = "Zhou Guanyu"
    numeroTwo.textContent = "Número: 24"
    nacionalidadeTwo.textContent = "Nacionalidade: China"
    flagImgTwo.src = "./photos/bandeiras/china.png"
    cardColorTwo.style.borderLeft = "3px solid #b3404a"
  } else if (team === "astonMartin") {
    logoTeam.src = "./photos/equipes/astonmartin.png"
    logoPilot.src = "./photos/pilotos/alonso.png"
    h2.textContent = "Fernando Alonso"
    numeroP.textContent = "Número: 14"
    nacionalidadeP.textContent = "Nacionalidade: Espanha"
    flagImg.src = "./photos/bandeiras/espanha.png"
    cardColor.style.borderLeft = "3px solid #00584f"

    logoPilot2.src = "./photos/pilotos/stroll.png"
    h2Two.textContent = "Lance Stroll"
    numeroTwo.textContent = "Número: 18"
    nacionalidadeTwo.textContent = "Nacionalidade: Canadá"
    flagImgTwo.src = "./photos/bandeiras/canada.png"
    cardColorTwo.style.borderLeft = "3px solid #00584f"
  } else if (team === "alpine") {
    logoTeam.src = "./photos/equipes/alpine.png"
    logoPilot.src = "./photos/pilotos/gasly.png"
    h2.textContent = "Pierre Gasly"
    numeroP.textContent = "Número: 10"
    nacionalidadeP.textContent = "Nacionalidade: França"
    flagImg.src = "./photos/bandeiras/franca.png"
    cardColor.style.borderLeft = "3px solid #b45282"

    logoPilot2.src = "./photos/pilotos/ocon.png"
    h2Two.textContent = "Esteban Ocon"
    numeroTwo.textContent = "Número: 31"
    nacionalidadeTwo.textContent = "Nacionalidade: França"
    flagImgTwo.src = "./photos/bandeiras/franca.png"
    cardColorTwo.style.borderLeft = "3px solid #b45282"
  } else if (team === "haas") {
    logoTeam.src = "./photos/equipes/haas.png"
    logoPilot.src = "./photos/pilotos/nico.png"
    h2.textContent = "Nico Hulkenberg"
    numeroP.textContent = "Número: 27"
    nacionalidadeP.textContent = "Nacionalidade: Alemanha"
    flagImg.src = "./photos/bandeiras/alemanha.png"
    cardColor.style.borderLeft = "3px solid #c5152d"

    logoPilot2.src = "./photos/pilotos/kevin.png"
    h2Two.textContent = "Kevin Magnussen"
    numeroTwo.textContent = "Número: 20"
    nacionalidadeTwo.textContent = "Nacionalidade: Dinamarca"
    flagImgTwo.src = "./photos/bandeiras/dinamarca.png"
    cardColorTwo.style.borderLeft = "3px solid #c5152d"
  } else if (team === "mcLaren") {
    logoTeam.src = "./photos/equipes/mclaren.png"
    logoPilot.src = "./photos/pilotos/norris.png"
    h2.textContent = "Lando Norris"
    numeroP.textContent = "Número: 4"
    nacionalidadeP.textContent = "Nacionalidade: Reino Unido"
    flagImg.src = "./photos/bandeiras/reinounido.png"
    cardColor.style.borderLeft = "3px solid #e47202"

    logoPilot2.src = "./photos/pilotos/piastri.png"
    h2Two.textContent = "Oscar Piastri"
    numeroTwo.textContent = "Número: 81"
    nacionalidadeTwo.textContent = "Nacionalidade: Austrália"
    flagImgTwo.src = "./photos/bandeiras/australia.png"
    cardColorTwo.style.borderLeft = "3px solid #e47202"
  } else if (team === "mercedes") {
    logoTeam.src = "./photos/equipes/mercedes.png"
    logoPilot.src = "./photos/pilotos/lewis.png"
    h2.textContent = "Lewis Hamilton"
    numeroP.textContent = "Número: 44"
    nacionalidadeP.textContent = "Nacionalidade: Reino Unido"
    flagImg.src = "./photos/bandeiras/reinounido.png"
    cardColor.style.borderLeft = "3px solid #03968e"

    logoPilot2.src = "./photos/pilotos/george.png"
    h2Two.textContent = "George Russell"
    numeroTwo.textContent = "Número: 63"
    nacionalidadeTwo.textContent = "Nacionalidade: Reino Unido"
    flagImgTwo.src = "./photos/bandeiras/reinounido.png"
    cardColorTwo.style.borderLeft = "3px solid #03968e"
  } else if (team === "redBull") {
    logoTeam.src = "./photos/equipes/redbull.png"
    logoPilot.src = "./photos/pilotos/max.png"
    h2.textContent = "Max Verstappen"
    numeroP.textContent = "Número: 1"
    nacionalidadeP.textContent = "Nacionalidade: Holanda"
    flagImg.src = "./photos/bandeiras/holanda.png"
    cardColor.style.borderLeft = "3px solid #1f273b"

    logoPilot2.src = "./photos/pilotos/perez.png"
    h2Two.textContent = "Sergio Perez"
    numeroTwo.textContent = "Número: 11"
    nacionalidadeTwo.textContent = "Nacionalidade: México"
    flagImgTwo.src = "./photos/bandeiras/mexico.png"
    cardColorTwo.style.borderLeft = "3px solid #1f273b"
  } else if (team === "alphaTauri") {
    logoTeam.src = "./photos/equipes/alphatauri.png"
    logoPilot.src = "./photos/pilotos/ricciardo.png"
    h2.textContent = "Daniel Ricciardo"
    numeroP.textContent = "Número: 3"
    nacionalidadeP.textContent = "Nacionalidade: Austrália"
    flagImg.src = "./photos/bandeiras/australia.png"
    cardColor.style.borderLeft = "3px solid #0b2842"

    logoPilot2.src = "./photos/pilotos/yuki.png"
    h2Two.textContent = "Yuki Tsunoda"
    numeroTwo.textContent = "Número: 22"
    nacionalidadeTwo.textContent = "Nacionalidade: Japão"
    flagImgTwo.src = "./photos/bandeiras/japao.png"
    cardColorTwo.style.borderLeft = "3px solid #0b2842"
  } else if (team === "ferrari") {
    logoTeam.src = "./photos/equipes/ferrari.png"
    logoPilot.src = "./photos/pilotos/leclerc.png"
    h2.textContent = "Charles Leclerc"
    numeroP.textContent = "Número: 16"
    nacionalidadeP.textContent = "Nacionalidade: Monaco"
    flagImg.src = "./photos/bandeiras/monaco.png"
    cardColor.style.borderLeft = "3px solid #d42f33"

    logoPilot2.src = "./photos/pilotos/sainz.png"
    h2Two.textContent = "Carlos Sainz"
    numeroTwo.textContent = "Número: 55"
    nacionalidadeTwo.textContent = "Nacionalidade: Espanha"
    flagImgTwo.src = "./photos/bandeiras/espanha.png"
    cardColorTwo.style.borderLeft = "3px solid #d42f33"
  } else if (team === "williams") {
    logoTeam.src = "./photos/equipes/williams.png"
    logoPilot.src = "./photos/pilotos/albon.png"
    h2.textContent = "Alexander Albon"
    numeroP.textContent = "Número: 23"
    nacionalidadeP.textContent = "Nacionalidade: Tailândia"
    flagImg.src = "./photos/bandeiras/tailandia.png"
    cardColor.style.borderLeft = "3px solid #01afd9"

    logoPilot2.src = "./photos/pilotos/logan.png"
    h2Two.textContent = "Logan Sargeant"
    numeroTwo.textContent = "Número: 2"
    nacionalidadeTwo.textContent = "Nacionalidade: Estados Unidos"
    flagImgTwo.src = "./photos/bandeiras/eua.png"
    cardColorTwo.style.borderLeft = "3px solid #01afd9"
  }
}

// Função para obter o valor do parâmetro 'team' da URL
function getQueryParam(param) {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  return urlParams.get(param)
}

const teamParam = getQueryParam("team")

function hideCards() {
  const cards = document.querySelectorAll(".card")
  cards.forEach((card) => {
    card.style.display = "none"
  })
}

if (teamParam) {
  updateTeamContent(teamParam)
} else {
  console.error("Parâmetro 'team' ausente na URL no arquivo index.")
  hideCards()
}
