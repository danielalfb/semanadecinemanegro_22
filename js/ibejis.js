var container = document.querySelector(".container");
var src = "./img/filmes/";
var ibejis1 = [];
var ibejis2 = [];

function fetchJson(url) {
  return fetch(url).then((ans) => {
    return ans.json();
  });
}

async function loadData() {
  var data = await fetchJson("/semanadecinemanegro_22/js/data.json");
  ibejis1 = data.ibejis1;
  ibejis2 = data.ibejis2;

  function createDataSession1() {
    var sesTitlePT = document.createElement("a");
    var sesTitleEN = document.createElement("a");
    var descriptionPT = document.createElement("p");
    var descriptionEN = document.createElement("p");
    sesTitlePT.className = "sessionTitle1";
    sesTitleEN.className = "sessionTitle1";
    sesTitlePT.setAttribute("lang", "pt");
    sesTitleEN.setAttribute("lang", "en");
    sesTitlePT.innerHTML = 'IBEJIS 1</a> <em class="fas fa-chevron-down"></em>';
    sesTitleEN.innerHTML = 'IBEJIS 1</a> <em class="fas fa-chevron-down"></em>';
    descriptionPT.className = "descriptionSession";
    descriptionEN.className = "descriptionSession";
    descriptionPT.setAttribute("lang", "pt");
    descriptionEN.setAttribute("lang", "en");
    descriptionPT.innerHTML =
      "Dedicada a pensar como as articulações dos elementos estéticos e narrativos no cinema circunscrevem uma forma de cine-escritura preta que, em lugar da mera assimilação de formas dadas, busca ressignificar um repertório de técnicas já consolidadas, muitas destas até mesmo desgastadas. Segundo as curadoras, isso se dá à luz de uma experiência negra, afrodescendente, operando uma resistência que é, sobretudo, cultural e em favor do não-apagamento de maneiras muito particulares de vivenciar e estar no mundo.";
    descriptionEN.innerHTML =
      "Dedicated to pondering how the articulations of aesthetic and narrative elements in film circumscribe a way of black film-writing that, instead of simple assimilation of given forms, attempts to give new meanings to a repertoire of established techniques, many of which are worn out. According to the curators, this articulation generates a black experience, afro-descendant, creating a resistance that is, above all, cultural and against the erasing of the very particular ways of experiencing and being in the world.";
    container.appendChild(sesTitlePT);
    container.appendChild(sesTitleEN);
    container.appendChild(descriptionPT);
    container.appendChild(descriptionEN);
    for (let i = 0; i < ibejis1.length; i++) {
      var postBox = document.createElement("div");
      postBox.className = "postBox1 hidden";
      postBox.innerHTML = `
      <div class="postImg filmeImg" style="background-image: url('${src}${ibejis1[i].img}')"></div>
      <div class="postInfo"><h1 lang="pt">${ibejis1[i].tituloPt}</h1>
        <h1 lang="en">${ibejis1[i].tituloEng}</h1><h3>${ibejis1[i].localDuracao}</h3>
        <p lang="pt">${ibejis1[i].sinopsePt}</p>
        <p lang="en">${ibejis1[i].sinopseEng}</p>
        <div lang="pt" class="btn-filmes">
          <div class="info">
            <button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
            <div class="content"><ul>${ibejis1[i].fichaTecnica}</ul></div>
          </div>
        </div>
        <div lang="en" class="btn-filmes">
          <div class="info">
            <button type="button" class="collapsible"> ADDITIONAL INFORMATION <i class="fas fa-plus"></i></button>
            <div class="content"><ul>${ibejis1[i].fichaTecnica}</ul></div>
          </div>
        </div>
      </div>`;
      container.appendChild(postBox);
    }
  }
  function createDataSession2() {
    var sesTitlePT = document.createElement("a");
    var sesTitleEN = document.createElement("a");
    var descriptionPT = document.createElement("p");
    var descriptionEN = document.createElement("p");
    sesTitlePT.className = "sessionTitle1";
    sesTitleEN.className = "sessionTitle1";
    sesTitlePT.setAttribute("lang", "pt");
    sesTitleEN.setAttribute("lang", "en");
    sesTitlePT.innerHTML = 'IBEJIS 2</a> <em class="fas fa-chevron-down"></em>';
    sesTitleEN.innerHTML = 'IBEJIS 2</a> <em class="fas fa-chevron-down"></em>';
    descriptionPT.className = "descriptionSession";
    descriptionEN.className = "descriptionSession";
    descriptionPT.setAttribute("lang", "pt");
    descriptionEN.setAttribute("lang", "en");
    descriptionPT.innerHTML =
      "Dedicada a pensar como as articulações dos elementos estéticos e narrativos no cinema circunscrevem uma forma de cine-escritura preta que, em lugar da mera assimilação de formas dadas, busca ressignificar um repertório de técnicas já consolidadas, muitas destas até mesmo desgastadas. Segundo as curadoras, isso se dá à luz de uma experiência negra, afrodescendente, operando uma resistência que é, sobretudo, cultural e em favor do não-apagamento de maneiras muito particulares de vivenciar e estar no mundo.";
    descriptionEN.innerHTML =
      "Dedicated to pondering how the articulations of aesthetic and narrative elements in film circumscribe a way of black film-writing that, instead of simple assimilation of given forms, attempts to give new meanings to a repertoire of established techniques, many of which are worn out. According to the curators, this articulation generates a black experience, afro-descendant, creating a resistance that is, above all, cultural and against the erasing of the very particular ways of experiencing and being in the world.";
    container.appendChild(sesTitlePT);
    container.appendChild(sesTitleEN);
    container.appendChild(descriptionPT);
    container.appendChild(descriptionEN);
    for (let i = 0; i < ibejis2.length; i++) {
      var postBox = document.createElement("div");
      postBox.className = "postBox1 hidden";
      postBox.innerHTML = `
      <div class="postImg filmeImg" style="background-image: url('${src}${ibejis2[i].img}')"></div>
      <div class="postInfo"><h1 lang="pt">${ibejis2[i].tituloPt}</h1>
        <h1 lang="en">${ibejis2[i].tituloEng}</h1><h3>${ibejis2[i].localDuracao}</h3>
        <p lang="pt">${ibejis2[i].sinopsePt}</p>
        <p lang="en">${ibejis2[i].sinopseEng}</p>
        <div lang="pt" class="btn-filmes">
          <div class="info">
            <button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
            <div class="content"><ul>${ibejis2[i].fichaTecnica}</ul></div>
          </div>
        </div>
        <div lang="en" class="btn-filmes">
          <div class="info">
            <button type="button" class="collapsible"> ADDITIONAL INFORMATION <i class="fas fa-plus"></i></button>
            <div class="content"><ul>${ibejis2[i].fichaTecnica}</ul></div>
          </div>
        </div>
      </div>`;
      container.appendChild(postBox);
    }
  }
  createDataSession1();
  createDataSession2();
  sessionCollapsible();
  collapsible();
  translate();
}
loadData();
