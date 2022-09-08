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
    var data = await fetchJson("../js/data.json");
    ibejis1 = data.ibejis1;
    ibejis2 = data.ibejis2;
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
            'IBEJIS (1) </a> <em class="fas fa-chevron-down"></em>';
        sesTitleEN.innerHTML =
            'IBEJIS (1) </a> <em class="fas fa-chevron-down"></em>';
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
        for (let i = 0; i < ibejis1.length; i++) {
            var postBox = document.createElement("div");
            postBox.className = "postBox hidden";
            postBox.innerHTML = `
      <div class="postImg filmeImg" style="background-image: url('${src}${ibejis1[i].img}')"></div><div class="postInfo"><h1 lang="pt">${ibejis1[i].tituloPt}</h1>
      <h1 lang="en">${ibejis1[i].tituloEng}</h1><h3>${ibejis1[i].localDuracao}</h3><p lang="pt">${ibejis1[i].sinopsePt}</p><p lang="en">${ibejis1[i].sinopseEng}</p>
      <div lang="pt" class="btn-filmes"><div class="info"><button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${ibejis1[i].fichaTecnica}</ul></div> </div></div>
      <div lang="en" class="btn-filmes"><div class="info"><button type="button" class="collapsible"> ADDITIONAL INFORMATION <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${ibejis1[i].fichaTecnica}</ul></div></div></div></div>`;
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
            'IBEJIS (2) </a> <em class="fas fa-chevron-down"></em>';
        sesTitleEN.innerHTML =
            'IBEJIS (2) </a> <em class="fas fa-chevron-down"></em>';
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
        for (let i = 0; i < ibejis2.length; i++) {
            var postBox = document.createElement("div");
            postBox.className = "postBox hidden";
            postBox.innerHTML = `
      <div class="postImg filmeImg" style="background-image: url('${src}${ibejis2[i].img}')"></div><div class="postInfo"><h1 lang="pt">${ibejis2[i].tituloPt}</h1>
      <h1 lang="en">${ibejis2[i].tituloEng}</h1><h3>${ibejis2[i].localDuracao}</h3><p lang="pt">${ibejis2[i].sinopsePt}</p><p lang="en">${ibejis2[i].sinopseEng}</p>
      <div lang="pt" class="btn-filmes"><div class="info"><button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${ibejis2[i].fichaTecnica}</ul></div> </div></div>
      <div lang="en" class="btn-filmes"><div class="info"><button type="button" class="collapsible"> ADDITIONAL INFORMATION <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${ibejis2[i].fichaTecnica}</ul></div></div></div></div>`;
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
