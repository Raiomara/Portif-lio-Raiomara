const projetos = [
  {
    titulo: "Casa & Estilo",
    descricao: "Site inspirado em decoração clean e organização de ambientes",
    imagem: "img/casa.jpg",
    link: "casa-estilo.html"
  },
  {
    titulo: "Verde em Casa",
    descricao: "Projeto web inspirado no uso de plantas na decoração",
    imagem: "img/verde.jpg",
    link: "verde-em-casa.html"
  }
];

const lista = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  lista.innerHTML += `
    <div class="card">
        <img src="${projeto.imagem}" class="card-img">
        <h3>${projeto.titulo}</h3>
        <p>${projeto.descricao}</p>
        <a href="${projeto.link}" class="btn">Ver</a>
    </div>
  `;
});