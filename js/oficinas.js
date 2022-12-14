var container = document.querySelector(".container");
var src = "./img/oficinas/";
var boxContent = [];

function fetchJson(url) {
    return fetch(url).then((ans) => {
        return ans.json();
    });
}

async function loadData() {
    var data = await fetchJson("../js/data.json");
    boxContent = data.oficinas;

    function createData() {
        for (i = 0; i < boxContent.length; i++) {
            var postBox = document.createElement("div");
            postBox.className = "postBoxOficina postBox";
            postBox.innerHTML = `
    <div class="postInfo">
      <h1 lang="pt" style="color: var(--cor-lilac)">${boxContent[i].tituloPt}</h1>
      <h1 lang="en" style="color: var(--cor-lilac)">${boxContent[i].tituloEng}</h>
      <h2>${boxContent[i].data}, ${boxContent[i].horario}</h2>
      <p lang="pt" style="min-height: 300px!important;">${boxContent[i].descricaoPt}</p>
      <p lang="en" style="min-height: 300px!important;">${boxContent[i].descricaoEng}</p>
    </div>
    <div class="minInfo">
    <div class="minCurr">
    <div class="postImg minInfoImg" style="background-image: url('${src}${boxContent[i].img}')"></div>
      <p lang="pt">${boxContent[i].curriculoPt}</p>
      <p lang="en">${boxContent[i].curriculoEng}</p>
    </div>
    </div></div>`;
            container.appendChild(postBox);
        }
    }
    createData();
    translate();
}
loadData();
