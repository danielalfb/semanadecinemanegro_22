var container = document.querySelector(".debateContainer");
var src = "./img/debates/";
var boxContent = [];

function fetchJson(url) {
  return fetch(url).then((ans) => {
    return ans.json();
  });
}

// <li> <a href="${boxContent[i].link}" class="btn debate-btn" target="_blank" >ASSISTA NO YOUTUBE <i class="fas fa-external-link-alt"></i ></a></li>

async function loadData() {
  var data = await fetchJson("js/data.json");
  boxContent = data.debates;

  function createData() {
    for (i = 0; i < boxContent.length; i++) {
      var debateBox2 = document.createElement("div");
      debateBox2.className = "debateBox";
      debateBox2.innerHTML = `
      <div>
        <div class="debateTitle">
          <h1>${boxContent[i].tituloPt}</h1>
          <!--<h2>Participantes: ${boxContent[i].participantes}</h2>-->
        <div class="debateInfo">
          <div class="debateBanner">
            <div class="debateImage" style="background-image: url('${src}${boxContent[i].img}')"></div>
          </div>
          <div class="youtubeButtonDiv">
            <a lang="pt" class="youtubeBtn" href="${boxContent[i].link}" target="_blank">ASSISTIR</a>
            <a lang="en" class="youtubeBtn" href="${boxContent[i].link}" target="_blank">WATCH</a>
          </div>
        </div>
      </div>        </div>
`;
      container.appendChild(debateBox2);
    }
  }
  createData();
  translate();
}
loadData();
