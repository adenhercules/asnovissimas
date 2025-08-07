let preloader = document.querySelector("#preload");
let camilaCampoTexto = 'Camila Campo é artista plástica, DJ e produtora de Guajará-Mirim (RO), atuante em Porto-Velho.'
let camilaCampoDescricao = 'Suas criações exploram performance e arte digital a partir da vivência travesti na cidade. Corpo, gênero e disputa simbólica atravessam sua obra — arte como embate e existência.\n' +
    '\n' +
    'Sua arte investiga como corpos dissidentes ocupam o espaço urbano, tensionando símbolos religiosos e normas sociais.'
let camilaSaTexto = 'Camila Sá é fotógrafa desde os 16 anos, portovelhense e educadora. Sua produção transita entre a fotografia e a\n' +
    '                    instalação, explorando técnicas manuais e a ressignificação de objetos do cotidiano.'
let camilaSaDescricao = 'Em suas obras, propõe reflexões sobre a tensão entre o mundo dos sonhos e a materialidade. Fotografia analógica, cianotipia, pinhole e outras gambiarras...'
let joaoVictorTexto = 'João Victor artista visual e educomunicador em trânsito constante entre linguagens, tem seus trabalhos voltados à\n' +
    '                    artemídia como território de experimentações.'
let joaoVictorDescricao = 'Arte, comunicação e tecnologia se entrelaçam em sua prática como expansões da imagem e do movimento.'
let mariaTexto = 'Maria Silper é natural de Porto Velho,\n' +
    '                    arte-educadora e fotógrafa, investiga\n' +
    '                    as relações entre memória e fotografia.'
let mariaDescricao = 'Explora narrativas visuais que atravessam o tempo, a identidade e a experiência.'

let samaraTexto = 'Samara Ramos é natural de Comodoro – MT, é\n' +
    '                    artista, arte-educadora e mediadora\n' +
    '                    cultural, com atuação também na\n' +
    '                    produção cultural.'
let samaraDescricao = 'Sua pesquisa envolve processos criativos a partir da utilização de jogos lúdicos como auxílio na formação artística e cultural. Em suas obras utiliza a fotografia sobreposta com elementos gráficos visuais criando composições que evocam reflexões sobre realidades utópicas da sociedade.'
let textoModalTitulo
let descricaoModal
window.onload = loadPage();

function loadPage() {
    window.scroll({
        top: 0
    })
    document.body.classList.add("loading");
    setTimeout(() => {
        preloader.classList.add("preloader-invisible");
        setTimeout(() => {
            // Aqui, a tela de carregamento é retirada do DOM depois de 300ms (o tempo para dar a animação de opacity.)
            preloader.remove();
        }, 300);
        document.body.classList.remove("loading");

    }, 2000)
}


// Quando o player de mídia é aberto
// function openVideoModal() {
//     let iframe = document.querySelector('iframe');
//     iframe.src = "https://www.youtube.com/embed/QIPdMmgCWi0?si=olLwRfKwzR0aatAJ&autoplay=1";
//     document.querySelector('.modal').addEventListener('hidden.bs.modal', () => {
//         iframe.src = "";
//     });
// }
function openModalArtistas(artista, texto) {
    textoModalTitulo = artista;
    descricaoModal = texto;
    document.getElementById('tituloModal').textContent = textoModalTitulo;
    document.getElementById('descricaoModal').textContent = descricaoModal;

    const modal = new bootstrap.Modal(document.getElementById('artistaModal'));
    modal.show();
}


