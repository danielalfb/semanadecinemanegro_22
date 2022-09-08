var container = document.querySelector(".container");
var src = "../mostras/img/filmes/";
var boxContent = [];

function fetchJson(url) {
    return fetch(url).then((ans) => {
        return ans.json();
    });
}

async function loadData() {
    var data = await fetchJson("../js/data.json");
    boxContent = data.palcoNasTelas;

    function createData() {
        for (i = 0; i < boxContent.length; i++) {
            var postBox = document.createElement("div");
            postBox.className = "postBox";
            postBox.innerHTML = `
      <div class="postImg filmeImg" style="background-image: url('${src}${boxContent[i].img}')"></div>
      <div class="postInfo"><h1 lang="pt">${boxContent[i].tituloPt}</h1>
        <h1 lang="en">${boxContent[i].tituloEng}</h1><h3 class="postSubTitle">${boxContent[i].localDuracao}</h3>
        <p lang="pt">${boxContent[i].sinopsePt}</p>
        <p lang="en">${boxContent[i].sinopseEng}</p>
        <div lang="pt" class="btn-filmes">
          <div class="info">
            <button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
            <div class="content"><ul>${boxContent[i].fichaTecnica}</ul></div>
          </div>
        </div>
        <div lang="en" class="btn-filmes">
          <div class="info">
            <button type="button" class="collapsible"> ADDITIONAL INFORMATION <i class="fas fa-plus"></i></button>
            <div class="content"><ul>${boxContent[i].fichaTecnica}</ul></div>
          </div>
        </div>
      </div>`;
            container.appendChild(postBox);
        }
    }
    createData();
    collapsible();
    translate();
}
loadData();
