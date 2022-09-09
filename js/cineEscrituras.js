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
    var data = await fetchJson("../js/data.json");
    sessaoDistopia = data.sessaoDistopia;
    sessaoPulsao1 = data.sessaoPulsao1;
    sessaoPulsao2 = data.sessaoPulsao2;
    sessaoImagem = data.sessaoImagem;
    sessaoAquilombamento = data.sessaoAquilombamento;
    sessaoKalunga = data.sessaoKalunga;
    sessaoAquilombamentoEnc = data.sessaoAquilombamentoEnc;

    function removeItem() {
        hiddenButton = document.querySelector(
            "#postBoxKalunga-4 a.btn"
        ).style.display = "none";
        hiddenButton2 = document.querySelector(
            "#postBoxDistopia-2 a.btn"
        ).style.display = "none";

        divButton = document.querySelector(
            "#postBoxKalunga-4 div.infoCineEscrituras"
        );
        divButton.classList.remove("infoCineEscrituras");
        divButton.classList.add("info");

        divButton2 = document.querySelector(
            "#postBoxDistopia-2 div.infoCineEscrituras"
        );
        divButton2.classList.remove("infoCineEscrituras");
        divButton2.classList.add("info");
    }

    function createDataSession1() {
        var sesTitlePT = document.createElement("a");
        var sesTitleEN = document.createElement("a");
        var descriptionPT = document.createElement("p");
        var descriptionEN = document.createElement("p");
        sesTitlePT.className = "sessionTitleDistopia";
        sesTitleEN.className = "sessionTitleDistopia";
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
        descriptionPT.innerHTML = "";
        descriptionEN.innerHTML = "";
        container.appendChild(sesTitlePT);
        container.appendChild(sesTitleEN);
        container.appendChild(descriptionPT);
        container.appendChild(descriptionEN);
        for (let i = 0; i < sessaoDistopia.length; i++) {
            var postBox = document.createElement("div");
            postBox.className = "postBoxDistopia hidden";
            postBox.id = `postBoxDistopia-${i}`;
            postBox.innerHTML = `
      <div class="postImg filmeImg" style="background-image: url('${src}${sessaoDistopia[i].img}')"></div><div class="postInfo"><h1 lang="pt">${sessaoDistopia[i].tituloPt}</h1>
      <h1 lang="en">${sessaoDistopia[i].tituloEng}</h1><h3>${sessaoDistopia[i].localDuracao}</h3><p lang="pt">${sessaoDistopia[i].sinopsePt}</p><p lang="en">${sessaoDistopia[i].sinopseEng}</p>
      <div lang="pt" class="btn-filmes"><div class="infoCineEscrituras"><button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoDistopia[i].fichaTecnica}</ul></div><a href="${sessaoDistopia[i].link}" class="btn pt">Assista o filme <i class="fas fa-external-link-alt"></i></a></div></div>
      <div lang="en" class="btn-filmes"><div class="infoCineEscrituras"><button type="button" class="collapsible">ADDITIONAL INFORMATION <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoDistopia[i].fichaTecnica}</ul></div></div><a href="${sessaoDistopia[i].link}" class="btn en">Watch <i class="fas fa-external-link-alt"></i></a></div></div>`;
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
        sesTitlePT.innerHTML =
            'PULSÃO DE VIDA (1) </a> <em class="fas fa-chevron-down"></em>';
        sesTitleEN.innerHTML =
            'PULSÃO DE VIDA (1)</a> <em class="fas fa-chevron-down"></em>';
        descriptionPT.className = "descriptionSession";
        descriptionEN.className = "descriptionSession";
        descriptionPT.setAttribute("lang", "pt");
        descriptionEN.setAttribute("lang", "en");
        descriptionPT.innerHTML = "";
        descriptionEN.innerHTML = "";
        container.appendChild(sesTitlePT);
        container.appendChild(sesTitleEN);
        container.appendChild(descriptionPT);
        container.appendChild(descriptionEN);
        for (let i = 0; i < sessaoPulsao1.length; i++) {
            var postBox = document.createElement("div");
            postBox.className = "postBox1 hidden";
            postBox.innerHTML = `
      <div class="postImg filmeImg" style="background-image: url('${src}${sessaoPulsao1[i].img}')"></div><div class="postInfo"><h1 lang="pt">${sessaoPulsao1[i].tituloPt}</h1>
      <h1 lang="en">${sessaoPulsao1[i].tituloEng}</h1><h3>${sessaoPulsao1[i].localDuracao}</h3><p lang="pt">${sessaoPulsao1[i].sinopsePt}</p><p lang="en">${sessaoPulsao1[i].sinopseEng}</p>
      <div lang="pt" class="btn-filmes"><div class="infoCineEscrituras"><button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoPulsao1[i].fichaTecnica}</ul></div><a href="${sessaoPulsao1[i].link}" class="btn pt">Assista o filme <i class="fas fa-external-link-alt"></i></a></div></div>
      <div lang="en" class="btn-filmes"><div class="infoCineEscrituras"><button type="button" class="collapsible"> ADDITIONAL INFORMATION <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoPulsao1[i].fichaTecnica}</ul></div></div><a href="${sessaoPulsao1[i].link}" class="btn en">Watch <i class="fas fa-external-link-alt"></i></a></div></div>`;
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
        descriptionPT.innerHTML = "";
        descriptionEN.innerHTML = "";
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
      <div lang="pt" class="btn-filmes"><div class="infoCineEscrituras"><button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoPulsao2[i].fichaTecnica}</ul></div><a href="${sessaoPulsao2[i].link}" class="btn pt">Assista o filme <i class="fas fa-external-link-alt"></i></a> </div></div>
      <div lang="en" class="btn-filmes"><div class="infoCineEscrituras"><button type="button" class="collapsible"> ADDITIONAL INFORMATION <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoPulsao2[i].fichaTecnica}</ul></div></div><a href="${sessaoPulsao2[i].link}" class="btn en">Watch <i class="fas fa-external-link-alt"></i></a></div></div>`;
            container.appendChild(postBox);
        }
    }
    function createDataSession4() {
        var sesTitlePT = document.createElement("a");
        var sesTitleEN = document.createElement("a");
        var descriptionPT = document.createElement("p");
        var descriptionEN = document.createElement("p");
        sesTitlePT.className = "sessionTitle2";
        sesTitleEN.className = "sessionTitle2";
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
        descriptionPT.innerHTML = "";
        descriptionEN.innerHTML = "";
        container.appendChild(sesTitlePT);
        container.appendChild(sesTitleEN);
        container.appendChild(descriptionPT);
        container.appendChild(descriptionEN);
        for (let i = 0; i < sessaoImagem.length; i++) {
            var postBox = document.createElement("div");
            postBox.className = "postBox2 hidden";
            postBox.innerHTML = `
      <div class="postImg filmeImg" style="background-image: url('${src}${sessaoImagem[i].img}')"></div><div class="postInfo"><h1 lang="pt">${sessaoImagem[i].tituloPt}</h1>
      <h1 lang="en">${sessaoImagem[i].tituloEng}</h1><h3>${sessaoImagem[i].localDuracao}</h3><p lang="pt">${sessaoImagem[i].sinopsePt}</p><p lang="en">${sessaoImagem[i].sinopseEng}</p>
      <div lang="pt" class="btn-filmes"><div class="infoCineEscrituras"><button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoImagem[i].fichaTecnica}</ul></div><a href="${sessaoImagem[i].link}" class="btn pt">Assista o filme <i class="fas fa-external-link-alt"></i></a> </div></div>
      <div lang="en" class="btn-filmes"><div class="infoCineEscrituras"><button type="button" class="collapsible"> ADDITIONAL INFORMATION <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoImagem[i].fichaTecnica}</ul></div></div><a href="${sessaoImagem[i].link}" class="btn en">Watch <i class="fas fa-external-link-alt"></i></a></div></div>`;
            container.appendChild(postBox);
        }
    }
    function createDataSession5() {
        var sesTitlePT = document.createElement("a");
        var sesTitleEN = document.createElement("a");
        var descriptionPT = document.createElement("p");
        var descriptionEN = document.createElement("p");
        sesTitlePT.className = "sessionTitle3";
        sesTitleEN.className = "sessionTitle3";
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
        descriptionPT.innerHTML = "";
        descriptionEN.innerHTML = "";
        container.appendChild(sesTitlePT);
        container.appendChild(sesTitleEN);
        container.appendChild(descriptionPT);
        container.appendChild(descriptionEN);
        for (let i = 0; i < sessaoAquilombamento.length; i++) {
            var postBox = document.createElement("div");
            postBox.className = "postBox3 hidden";
            postBox.innerHTML = `
      <div class="postImg filmeImg" style="background-image: url('${src}${sessaoAquilombamento[i].img}')"></div><div class="postInfo"><h1 lang="pt">${sessaoAquilombamento[i].tituloPt}</h1>
      <h1 lang="en">${sessaoAquilombamento[i].tituloEng}</h1><h3>${sessaoAquilombamento[i].localDuracao}</h3><p lang="pt">${sessaoAquilombamento[i].sinopsePt}</p><p lang="en">${sessaoAquilombamento[i].sinopseEng}</p>
      <div lang="pt" class="btn-filmes"><div class="infoCineEscrituras"><button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoAquilombamento[i].fichaTecnica}</ul></div><a href="${sessaoAquilombamento[i].link}" class="btn pt">Assista o filme <i class="fas fa-external-link-alt"></i></a></div></div>
      <div lang="en" class="btn-filmes"><div class="infoCineEscrituras"><button type="button" class="collapsible"> ADDITIONAL INFORMATION <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoAquilombamento[i].fichaTecnica}</ul></div></div><a href="${sessaoAquilombamento[i].link}" class="btn en">Watch <i class="fas fa-external-link-alt"></i></a></div></div>`;
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
        sesTitlePT.innerHTML =
            'KALUNGA</a> <em class="fas fa-chevron-down"></em>';
        sesTitleEN.innerHTML =
            'KALUNGA</a> <em class="fas fa-chevron-down"></em>';
        descriptionPT.className = "descriptionSession";
        descriptionEN.className = "descriptionSession";
        descriptionPT.setAttribute("lang", "pt");
        descriptionEN.setAttribute("lang", "en");
        descriptionPT.innerHTML = "";
        descriptionEN.innerHTML = "";
        container.appendChild(sesTitlePT);
        container.appendChild(sesTitleEN);
        container.appendChild(descriptionPT);
        container.appendChild(descriptionEN);
        for (let i = 0; i < sessaoKalunga.length; i++) {
            var postBox = document.createElement("div");
            postBox.className = "postBox hidden";
            postBox.id = `postBoxKalunga-${i}`;
            postBox.innerHTML = `
      <div class="postImg filmeImg" style="background-image: url('${src}${sessaoKalunga[i].img}')"></div><div class="postInfo"><h1 lang="pt">${sessaoKalunga[i].tituloPt}</h1>
      <h1 lang="en">${sessaoKalunga[i].tituloEng}</h1><h3>${sessaoKalunga[i].localDuracao}</h3><p lang="pt">${sessaoKalunga[i].sinopsePt}</p><p lang="en">${sessaoKalunga[i].sinopseEng}</p>
      <div lang="pt" class="btn-filmes"><div class="infoCineEscrituras"><button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoKalunga[i].fichaTecnica}</ul></div><a href="${sessaoKalunga[i].link}" class="btn pt kalunga">Assista o filme <i class="fas fa-external-link-alt"></i></a></div></div>
      <div lang="en" class="btn-filmes"><div class="infoCineEscrituras"><button type="button" class="collapsible"> ADDITIONAL INFORMATION <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoKalunga[i].fichaTecnica}</ul></div></div><a href="${sessaoKalunga[i].link}" class="btn en kalunga">Watch <i class="fas fa-external-link-alt"></i></a></div></div>`;
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
        descriptionPT.innerHTML = "";
        descriptionEN.innerHTML = "";
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
    removeItem();
    sessionCollapsible();
    collapsible();
    translate();
}
loadData();
