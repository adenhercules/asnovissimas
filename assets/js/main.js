let camilaCampoTexto =
  "Camila Campo é artista plástica, DJ e produtora de Guajará-Mirim (RO), atuante em Porto-Velho.";
let camilaCampoDescricao =
  "Suas criações exploram performance e arte digital a partir da vivência travesti na cidade. Corpo, gênero e disputa simbólica atravessam sua obra — arte como embate e existência.\n" +
  "\n" +
  "Sua arte investiga como corpos dissidentes ocupam o espaço urbano, tensionando símbolos religiosos e normas sociais.";
let camilaSaTexto =
  "Camila Sá é fotógrafa desde os 16 anos, portovelhense e educadora. Sua produção transita entre a fotografia e a instalação, explorando técnicas manuais e a ressignificação de objetos do cotidiano.";
let camilaSaDescricao =
  "Em suas obras, propõe reflexões sobre a tensão entre o mundo dos sonhos e a materialidade. Fotografia analógica, cianotipia, pinhole e outras gambiarras...";
let joaoVictorTexto =
  "João Victor artista visual e educomunicador em trânsito constante entre linguagens, tem seus trabalhos voltados à artemídia como território de experimentações.";
let joaoVictorDescricao =
  "Arte, comunicação e tecnologia se entrelaçam em sua prática como expansões da imagem e do movimento.";
let mariaTexto =
  "Maria Silper é natural de Porto Velho, arte-educadora e fotógrafa, investiga as relações entre memória e fotografia.";
let mariaDescricao =
  "Explora narrativas visuais que atravessam o tempo, a identidade e a experiência.";

let samaraTexto =
  "Samara Ramos é natural de Comodoro – MT, é artista, arte-educadora e mediadora cultural, com atuação também na produção cultural.";
let samaraDescricao =
  "Sua pesquisa envolve processos criativos a partir da utilização de jogos lúdicos como auxílio na formação artística e cultural. Em suas obras utiliza a fotografia sobreposta com elementos gráficos visuais criando composições que evocam reflexões sobre realidades utópicas da sociedade.";
let textoModalTitulo = "";
let descricaoModal = "";

// Função para abrir o modal dos artistas
function openModalArtistas(artista, texto) {
  textoModalTitulo = artista;
  descricaoModal = texto;
  document.getElementById("tituloModal").textContent = textoModalTitulo;
  document.getElementById("descricaoModal").textContent = descricaoModal;
  const modal = new bootstrap.Modal(document.getElementById("artistaModal"));
  modal.show();
}

// Preloader: só remove após o carregamento completo da página
window.onload = function () {
  const preloader = document.getElementById("preload");
  setTimeout(() => {
    preloader.classList.add("preloader-invisible");
    setTimeout(() => {
      preloader.style.display = "none";
      document.body.classList.remove("loading");
    }, 400); // tempo para o fade-out
  }, 1200); // tempo mínimo do loader
};
