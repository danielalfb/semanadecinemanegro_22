var container = document.querySelector(".container");
var src = "./img/filmes/";
var sessaoDistopia = [];
var sessaoPulsao1 = [];
var sessaoPulsao2 = [];
var sessaoImagem = [];
var sessaoAquilombamento = [];
var sessaoKalunga = [];
var sessaoAquilombamentoEnc = [];

function fetchJson(url) {
  return fetch(url).then((ans) => {
    return ans.json();
  });
}

async function loadData() {
  var data = await fetchJson("/semanadecinemanegro_22/js/data.json");
  sessaoDistopia = data.sessaoDistopia;
  sessaoPulsao1 = data.sessaoPulsao1;
  sessaoPulsao2 = data.sessaoPulsao2;
  sessaoImagem = data.sessaoImagem;
  sessaoAquilombamento = data.sessaoAquilombamento;
  sessaoKalunga = data.sessaoKalunga;
  sessaoAquilombamentoEnc = data.sessaoAquilombamentoEnc;

  function createDataSession1() {
    var sesTitlePT = document.createElement("a");
    var sesTitleEN = document.createElement("a");
    var descriptionPT = document.createElement("p");
    var descriptionEN = document.createElement("p");
    sesTitlePT.className = "sessionTitle";
    sesTitleEN.className = "sessionTitle";
    sesTitlePT.setAttribute("lang", "pt");
    sesTitleEN.setAttribute("lang", "en");
    sesTitlePT.innerHTML =
      'DISTOPIA E HORROR NEGRO</a> <em class="fas fa-chevron-down"></em>';
    sesTitleEN.innerHTML =
      'DISTOPIA E HORROR NEGRO</a> <em class="fas fa-chevron-down"></em>';
    descriptionPT.className = "descriptionSession";
    descriptionEN.className = "descriptionSession";
    descriptionPT.setAttribute("lang", "pt");
    descriptionEN.setAttribute("lang", "en");
    descriptionPT.innerHTML =
      "Cinema como foco na história e na cultura negra, que revive e coloca na tela experiências negras brasileira e corpos negros de várias matizes e expressões de gênero, todos encarnados em uma marca comum, a da ancestralidade. As obras deste conjunto nos ajudam a entender a ancestralidade como base fundamental das existências destes sujeitos diaspóricos, possibilitando o encontro e a re-inscrição do passado no presente e a imaginação de outros futuros que se fazem no agora.";
    descriptionEN.innerHTML =
      "Cinema with focus on black history and culture, that revives and puts on the screen the black Brazilian experiences and black bodies of various hues and gender expressions, all of which is embodied in a common factor, that of ancestry. The films in this program help us understand ancestry as a fundamental base of these diasporic subjects’ existences, allowing the encounter and the re-inscription of the past into the present and the imagination of other futures built in the present.";
    container.appendChild(sesTitlePT);
    container.appendChild(sesTitleEN);
    container.appendChild(descriptionPT);
    container.appendChild(descriptionEN);
    for (let i = 0; i < sessaoDistopia.length; i++) {
      var postBox = document.createElement("div");
      postBox.className = "postBox hidden";
      postBox.innerHTML = `
      <div class="postImg filmeImg" style="background-image: url('${src}${sessaoDistopia[i].img}')"></div><div class="postInfo"><h1 lang="pt">${sessaoDistopia[i].tituloPt}</h1>
      <h1 lang="en">${sessaoDistopia[i].tituloEng}</h1><h3>${sessaoDistopia[i].localDuracao}</h3><p lang="pt">${sessaoDistopia[i].sinopsePt}</p><p lang="en">${sessaoDistopia[i].sinopseEng}</p>
      <div lang="pt" class="btn-filmes"><div class="info"><button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoDistopia[i].fichaTecnica}</ul></div> </div></div>
      <div lang="en" class="btn-filmes"><div class="info"><button type="button" class="collapsible"> ADDITIONAL INFORMATION <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoDistopia[i].fichaTecnica}</ul></div></div></div></div>`;
      container.appendChild(postBox);
    }
  }
  function createDataSession2() {
    var sesTitlePT = document.createElement("a");
    var sesTitleEN = document.createElement("a");
    var descriptionPT = document.createElement("p");
    var descriptionEN = document.createElement("p");
    sesTitlePT.className = "sessionTitle";
    sesTitleEN.className = "sessionTitle";
    sesTitlePT.setAttribute("lang", "pt");
    sesTitleEN.setAttribute("lang", "en");
    sesTitlePT.innerHTML =
      'PULSÃO DE VIDA (1) </a> <em class="fas fa-chevron-down"></em>';
    sesTitleEN.innerHTML =
      'PULSÃO DE VIDA (1)</a> <em class="fas fa-chevron-down"></em>';
    descriptionPT.className = "descriptionSession";
    descriptionEN.className = "descriptionSession";
    descriptionPT.setAttribute("lang", "pt");
    descriptionEN.setAttribute("lang", "en");
    descriptionPT.innerHTML =
      "Cinema como foco na história e na cultura negra, que revive e coloca na tela experiências negras brasileira e corpos negros de várias matizes e expressões de gênero, todos encarnados em uma marca comum, a da ancestralidade. As obras deste conjunto nos ajudam a entender a ancestralidade como base fundamental das existências destes sujeitos diaspóricos, possibilitando o encontro e a re-inscrição do passado no presente e a imaginação de outros futuros que se fazem no agora.";
    descriptionEN.innerHTML =
      "Cinema with focus on black history and culture, that revives and puts on the screen the black Brazilian experiences and black bodies of various hues and gender expressions, all of which is embodied in a common factor, that of ancestry. The films in this program help us understand ancestry as a fundamental base of these diasporic subjects’ existences, allowing the encounter and the re-inscription of the past into the present and the imagination of other futures built in the present.";
    container.appendChild(sesTitlePT);
    container.appendChild(sesTitleEN);
    container.appendChild(descriptionPT);
    container.appendChild(descriptionEN);
    for (let i = 0; i < sessaoPulsao1.length; i++) {
      var postBox = document.createElement("div");
      postBox.className = "postBox hidden";
      postBox.innerHTML = `
      <div class="postImg filmeImg" style="background-image: url('${src}${sessaoPulsao1[i].img}')"></div><div class="postInfo"><h1 lang="pt">${sessaoPulsao1[i].tituloPt}</h1>
      <h1 lang="en">${sessaoPulsao1[i].tituloEng}</h1><h3>${sessaoPulsao1[i].localDuracao}</h3><p lang="pt">${sessaoPulsao1[i].sinopsePt}</p><p lang="en">${sessaoPulsao1[i].sinopseEng}</p>
      <div lang="pt" class="btn-filmes"><div class="info"><button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoPulsao1[i].fichaTecnica}</ul></div> </div></div>
      <div lang="en" class="btn-filmes"><div class="info"><button type="button" class="collapsible"> ADDITIONAL INFORMATION <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoPulsao1[i].fichaTecnica}</ul></div></div></div></div>`;
      container.appendChild(postBox);
    }
  }
  function createDataSession3() {
    var sesTitlePT = document.createElement("a");
    var sesTitleEN = document.createElement("a");
    var descriptionPT = document.createElement("p");
    var descriptionEN = document.createElement("p");
    sesTitlePT.className = "sessionTitleAfetos";
    sesTitleEN.className = "sessionTitleAfetos";
    sesTitlePT.setAttribute("lang", "pt");
    sesTitleEN.setAttribute("lang", "en");
    sesTitlePT.innerHTML =
      'PULSÃO DE VIDA (2) </a> <em class="fas fa-chevron-down"></em>';
    sesTitleEN.innerHTML =
      'PULSÃO DE VIDA (2) </a> <em class="fas fa-chevron-down"></em>';
    descriptionPT.className = "descriptionSession";
    descriptionEN.className = "descriptionSession";
    descriptionPT.setAttribute("lang", "pt");
    descriptionEN.setAttribute("lang", "en");
    descriptionPT.innerHTML =
      "Cinema que elabora a construção de espaços de resistência que não são necessariamente físicos, mas emocionais e afetivos, calcados em laços de partilha e pertença. Um quilombismo, como sinalizado por Abdias do Nascimento, pautado na construção de espaços coletivos e compartilhados, nos quais o convívio em comunidade com pessoas de mesma raça tece utopias de acolhimento e de luta por direitos, frutos de um desejo e um impulso de se irmanar, de se cercar de seus semelhantes.";
    descriptionEN.innerHTML =
      "A type of cinema that produces the creation of spaces and resistance that are not necessarily physical spaces, instead they are emotional and affective, based on bonds of sharing and belonging. A quilombismo, as pointed out by Abdias Nascimento, based on the construction of collective and shared spaces in which the community living with people of the same race weaves utopias of welcoming and struggle for rights, resulting from a desire and an impulse to join together, of being surrounded by those similar to you.";
    container.appendChild(sesTitlePT);
    container.appendChild(sesTitleEN);
    container.appendChild(descriptionPT);
    container.appendChild(descriptionEN);
    for (let i = 0; i < sessaoPulsao2.length; i++) {
      var postBox = document.createElement("div");
      postBox.className = "postBoxAfetos hidden";
      postBox.innerHTML = `
      <div class="postImg filmeImg" style="background-image: url('${src}${sessaoPulsao2[i].img}')"></div><div class="postInfo"><h1 lang="pt">${sessaoPulsao2[i].tituloPt}</h1>
      <h1 lang="en">${sessaoPulsao2[i].tituloEng}</h1><h3>${sessaoPulsao2[i].localDuracao}</h3><p lang="pt">${sessaoPulsao2[i].sinopsePt}</p><p lang="en">${sessaoPulsao2[i].sinopseEng}</p>
      <div lang="pt" class="btn-filmes"><div class="info"><button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoPulsao2[i].fichaTecnica}</ul></div> </div></div>
      <div lang="en" class="btn-filmes"><div class="info"><button type="button" class="collapsible"> ADDITIONAL INFORMATION <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoPulsao2[i].fichaTecnica}</ul></div></div></div></div>`;
      container.appendChild(postBox);
    }
  }
  function createDataSession4() {
    var sesTitlePT = document.createElement("a");
    var sesTitleEN = document.createElement("a");
    var descriptionPT = document.createElement("p");
    var descriptionEN = document.createElement("p");
    sesTitlePT.className = "sessionTitle";
    sesTitleEN.className = "sessionTitle";
    sesTitlePT.setAttribute("lang", "pt");
    sesTitleEN.setAttribute("lang", "en");
    sesTitlePT.innerHTML =
      'EU-IMAGEM</a> <em class="fas fa-chevron-down"></em>';
    sesTitleEN.innerHTML =
      'EU-IMAGEM</a> <em class="fas fa-chevron-down"></em>';
    descriptionPT.className = "descriptionSession";
    descriptionEN.className = "descriptionSession";
    descriptionPT.setAttribute("lang", "pt");
    descriptionEN.setAttribute("lang", "en");
    descriptionPT.innerHTML =
      "Conjunto de filmes que explicita elaborações de traumas e fabulações de uma existência e de futuros possíveis, sonhos que foram e são sonhados sem necessariamente terem a oportunidade de serem realizados. Que olham para as possibilidades de cura em lugar de reafirmar uma violência diária e histórica mediada e explicitada, escancarada e naturalizada de maneira espetacular por um mecanismo maniqueísta adotado por narrativas midiáticas dominantes.";
    descriptionEN.innerHTML =
      "A set of films that show the construction of traumas and fabulations of an existence and possible futures, dreams that were and are dreamed without necessarily having the opportunity of becoming reality. They look at the possibilities of healing instead of reaffirming daily and historical violence mediated, highlighted, overt, and naturalized in a spectacular way by a Manichaean mechanism adopted by dominant media narratives.";
    container.appendChild(sesTitlePT);
    container.appendChild(sesTitleEN);
    container.appendChild(descriptionPT);
    container.appendChild(descriptionEN);
    for (let i = 0; i < sessaoImagem.length; i++) {
      var postBox = document.createElement("div");
      postBox.className = "postBox hidden";
      postBox.innerHTML = `
      <div class="postImg filmeImg" style="background-image: url('${src}${sessaoImagem[i].img}')"></div><div class="postInfo"><h1 lang="pt">${sessaoImagem[i].tituloPt}</h1>
      <h1 lang="en">${sessaoImagem[i].tituloEng}</h1><h3>${sessaoImagem[i].localDuracao}</h3><p lang="pt">${sessaoImagem[i].sinopsePt}</p><p lang="en">${sessaoImagem[i].sinopseEng}</p>
      <div lang="pt" class="btn-filmes"><div class="info"><button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoImagem[i].fichaTecnica}</ul></div> </div></div>
      <div lang="en" class="btn-filmes"><div class="info"><button type="button" class="collapsible"> ADDITIONAL INFORMATION <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoImagem[i].fichaTecnica}</ul></div></div></div></div>`;
      container.appendChild(postBox);
    }
  }
  function createDataSession5() {
    var sesTitlePT = document.createElement("a");
    var sesTitleEN = document.createElement("a");
    var descriptionPT = document.createElement("p");
    var descriptionEN = document.createElement("p");
    sesTitlePT.className = "sessionTitle";
    sesTitleEN.className = "sessionTitle";
    sesTitlePT.setAttribute("lang", "pt");
    sesTitleEN.setAttribute("lang", "en");
    sesTitlePT.innerHTML =
      'AQUILOMBAMENTOS</a> <em class="fas fa-chevron-down"></em>';
    sesTitleEN.innerHTML =
      'AQUILOMBAMENTOS</a> <em class="fas fa-chevron-down"></em>';
    descriptionPT.className = "descriptionSession";
    descriptionEN.className = "descriptionSession";
    descriptionPT.setAttribute("lang", "pt");
    descriptionEN.setAttribute("lang", "en");
    descriptionPT.innerHTML =
      "Conjunto de filmes que explicita elaborações de traumas e fabulações de uma existência e de futuros possíveis, sonhos que foram e são sonhados sem necessariamente terem a oportunidade de serem realizados. Que olham para as possibilidades de cura em lugar de reafirmar uma violência diária e histórica mediada e explicitada, escancarada e naturalizada de maneira espetacular por um mecanismo maniqueísta adotado por narrativas midiáticas dominantes.";
    descriptionEN.innerHTML =
      "A set of films that show the construction of traumas and fabulations of an existence and possible futures, dreams that were and are dreamed without necessarily having the opportunity of becoming reality. They look at the possibilities of healing instead of reaffirming daily and historical violence mediated, highlighted, overt, and naturalized in a spectacular way by a Manichaean mechanism adopted by dominant media narratives.";
    container.appendChild(sesTitlePT);
    container.appendChild(sesTitleEN);
    container.appendChild(descriptionPT);
    container.appendChild(descriptionEN);
    for (let i = 0; i < sessaoAquilombamento.length; i++) {
      var postBox = document.createElement("div");
      postBox.className = "postBox hidden";
      postBox.innerHTML = `
      <div class="postImg filmeImg" style="background-image: url('${src}${sessaoAquilombamento[i].img}')"></div><div class="postInfo"><h1 lang="pt">${sessaoAquilombamento[i].tituloPt}</h1>
      <h1 lang="en">${sessaoAquilombamento[i].tituloEng}</h1><h3>${sessaoAquilombamento[i].localDuracao}</h3><p lang="pt">${sessaoAquilombamento[i].sinopsePt}</p><p lang="en">${sessaoAquilombamento[i].sinopseEng}</p>
      <div lang="pt" class="btn-filmes"><div class="info"><button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoAquilombamento[i].fichaTecnica}</ul></div> </div></div>
      <div lang="en" class="btn-filmes"><div class="info"><button type="button" class="collapsible"> ADDITIONAL INFORMATION <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoAquilombamento[i].fichaTecnica}</ul></div></div></div></div>`;
      container.appendChild(postBox);
    }
  }
  function createDataSession6() {
    var sesTitlePT = document.createElement("a");
    var sesTitleEN = document.createElement("a");
    var descriptionPT = document.createElement("p");
    var descriptionEN = document.createElement("p");
    sesTitlePT.className = "sessionTitle";
    sesTitleEN.className = "sessionTitle";
    sesTitlePT.setAttribute("lang", "pt");
    sesTitleEN.setAttribute("lang", "en");
    sesTitlePT.innerHTML = 'KALUNGA</a> <em class="fas fa-chevron-down"></em>';
    sesTitleEN.innerHTML = 'KALUNGA</a> <em class="fas fa-chevron-down"></em>';
    descriptionPT.className = "descriptionSession";
    descriptionEN.className = "descriptionSession";
    descriptionPT.setAttribute("lang", "pt");
    descriptionEN.setAttribute("lang", "en");
    descriptionPT.innerHTML =
      "Conjunto de filmes que explicita elaborações de traumas e fabulações de uma existência e de futuros possíveis, sonhos que foram e são sonhados sem necessariamente terem a oportunidade de serem realizados. Que olham para as possibilidades de cura em lugar de reafirmar uma violência diária e histórica mediada e explicitada, escancarada e naturalizada de maneira espetacular por um mecanismo maniqueísta adotado por narrativas midiáticas dominantes.";
    descriptionEN.innerHTML =
      "A set of films that show the construction of traumas and fabulations of an existence and possible futures, dreams that were and are dreamed without necessarily having the opportunity of becoming reality. They look at the possibilities of healing instead of reaffirming daily and historical violence mediated, highlighted, overt, and naturalized in a spectacular way by a Manichaean mechanism adopted by dominant media narratives.";
    container.appendChild(sesTitlePT);
    container.appendChild(sesTitleEN);
    container.appendChild(descriptionPT);
    container.appendChild(descriptionEN);
    for (let i = 0; i < sessaoKalunga.length; i++) {
      var postBox = document.createElement("div");
      postBox.className = "postBox hidden";
      postBox.innerHTML = `
      <div class="postImg filmeImg" style="background-image: url('${src}${sessaoKalunga[i].img}')"></div><div class="postInfo"><h1 lang="pt">${sessaoKalunga[i].tituloPt}</h1>
      <h1 lang="en">${sessaoKalunga[i].tituloEng}</h1><h3>${sessaoKalunga[i].localDuracao}</h3><p lang="pt">${sessaoKalunga[i].sinopsePt}</p><p lang="en">${sessaoKalunga[i].sinopseEng}</p>
      <div lang="pt" class="btn-filmes"><div class="info"><button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoKalunga[i].fichaTecnica}</ul></div> </div></div>
      <div lang="en" class="btn-filmes"><div class="info"><button type="button" class="collapsible"> ADDITIONAL INFORMATION <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoKalunga[i].fichaTecnica}</ul></div></div></div></div>`;
      container.appendChild(postBox);
    }
  }
  function createDataSession7() {
    var sesTitlePT = document.createElement("a");
    var sesTitleEN = document.createElement("a");
    var descriptionPT = document.createElement("p");
    var descriptionEN = document.createElement("p");
    sesTitlePT.className = "sessionTitle";
    sesTitleEN.className = "sessionTitle";
    sesTitlePT.setAttribute("lang", "pt");
    sesTitleEN.setAttribute("lang", "en");
    sesTitlePT.innerHTML =
      'AQUILOMBAMENTOS - SESSÃO DE ENCERRAMENTO</a> <em class="fas fa-chevron-down"></em>';
    sesTitleEN.innerHTML =
      'AQUILOMBAMENTOS - SESSÃO DE ENCERRAMENTO</a> <em class="fas fa-chevron-down"></em>';
    descriptionPT.className = "descriptionSession";
    descriptionEN.className = "descriptionSession";
    descriptionPT.setAttribute("lang", "pt");
    descriptionEN.setAttribute("lang", "en");
    descriptionPT.innerHTML =
      "Conjunto de filmes que explicita elaborações de traumas e fabulações de uma existência e de futuros possíveis, sonhos que foram e são sonhados sem necessariamente terem a oportunidade de serem realizados. Que olham para as possibilidades de cura em lugar de reafirmar uma violência diária e histórica mediada e explicitada, escancarada e naturalizada de maneira espetacular por um mecanismo maniqueísta adotado por narrativas midiáticas dominantes.";
    descriptionEN.innerHTML =
      "A set of films that show the construction of traumas and fabulations of an existence and possible futures, dreams that were and are dreamed without necessarily having the opportunity of becoming reality. They look at the possibilities of healing instead of reaffirming daily and historical violence mediated, highlighted, overt, and naturalized in a spectacular way by a Manichaean mechanism adopted by dominant media narratives.";
    container.appendChild(sesTitlePT);
    container.appendChild(sesTitleEN);
    container.appendChild(descriptionPT);
    container.appendChild(descriptionEN);
    for (let i = 0; i < sessaoAquilombamentoEnc.length; i++) {
      var postBox = document.createElement("div");
      postBox.className = "postBox hidden";
      postBox.innerHTML = `
      <div class="postImg filmeImg" style="background-image: url('${src}${sessaoAquilombamentoEnc[i].img}')"></div><div class="postInfo"><h1 lang="pt">${sessaoAquilombamentoEnc[i].tituloPt}</h1>
      <h1 lang="en">${sessaoAquilombamentoEnc[i].tituloEng}</h1><h3>${sessaoAquilombamentoEnc[i].localDuracao}</h3><p lang="pt">${sessaoAquilombamentoEnc[i].sinopsePt}</p><p lang="en">${sessaoAquilombamentoEnc[i].sinopseEng}</p>
      <div lang="pt" class="btn-filmes"><div class="info"><button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoAquilombamentoEnc[i].fichaTecnica}</ul></div></div></div>
      <div lang="en" class="btn-filmes"><div class="info"><button type="button" class="collapsible"> ADDITIONAL INFORMATION <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoAquilombamentoEnc[i].fichaTecnica}</ul></div></div></div></div>`;
      container.appendChild(postBox);
    }
  }
  createDataSession1();
  createDataSession2();
  createDataSession3();
  createDataSession4();
  createDataSession5();
  createDataSession6();
  createDataSession7();
  sessionCollapsible();
  collapsible();
  translate();
}
loadData();
