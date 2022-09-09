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
    boxContent = data.masterclass;

    function createData() {
        for (i = 0; i < boxContent.length; i++) {
            var postBox = document.createElement("div");
            postBox.className = "postBoxMasterclass";
            postBox.innerHTML = `
      <div class="postInfo">
        <h1 lang="pt" style="color: var(--cor-blue)">${boxContent[i].tituloPt}</h1>
        <h1 lang="en">${boxContent[i].tituloEng}</h>
        <h2>${boxContent[i].data}, ${boxContent[i].horario}</h2>
        <p lang="pt">${boxContent[i].descricaoPt}</p>
        <p lang="en">${boxContent[i].descricaoEng}</p>
      </div>
      <div class="minInfo">
      <div class="postBox" style=" width: 100%; ">
      <div class="postImg filmeImg" style="background-position: 25%; background-image: url('${src}${boxContent[i].img};')"></div>
      <div class="postInfo">
        <p lang="pt">${boxContent[i].curriculoPt}</p>
        <p lang="en">${boxContent[i].curriculoEng}</p>
      </div>        
      </div>
      </div>
      
    </div>`;
            container.appendChild(postBox);
        }
    }
    createData();
    translate();
}
loadData();
