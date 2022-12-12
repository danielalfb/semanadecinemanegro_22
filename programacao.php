<?php
require_once __DIR__ . '/function.php';
getHeader();
?>
<div class="page">
  <section>
    <div class="mainBanner"
      style="background-image: url('./mostras/img/banners/banner2.jpg'); background-position: center; height: 200px">
      <div class="mainInfo mainInfoProgram" style="color:var(--cor-yellow);text-align:left;margin-top: -50px;">
        <div class="title">
          <h1 lang="pt">PROGRAM<span style="color: var(--cor-lightpink)">AÇÃO</span></h1>
          <h1 lang="en">PRO<span style="color: var(--cor-lightpink)">GRAM</span></h1>

        </div>
      </div>
    </div>
  </section>
  <section class="programInfo">
    <div class="mainSubtitle"
      style="border-left: 5px solid var(--cor-lilac); flex-direction: column; margin: 0 3rem 0 3rem; gap: unset; text-align: left">
      <p lang="pt" style="padding: 0; width: 100%; margin-left: 50px;">
        Aqui você encontra a programação da 2º Semana de Cinema Negro de Belo Horizonte para download.</br>
        O festival acontece de forma presencial no Cine Humberto Mauro / Palácio das Artes, e seu encerramento se dará
        no Cine Santa Tereza.</br></br>

        A mostra Cine-Escrituras Pretas estará disponível para acesso online ao longo dos dias de festival, com exceção
        dos filmes eu, negra, de Juh Almeida, e Entre a Colônia e as Estrelas, de Lorran Dias. Baixe a programação e
        veja as datas de exibição dos filmes, das conversas internacionais e dos debates da mostra Cine-Escrituras
        Pretas.</br></br>

        Toda a programação é gratuita.
      </p>
      <p lang="en" style="padding: 0; width: 100%; margin-left: 50px;">
        Here you will find the program of the 2nd Belo Horizonte Black Film Week available for download.</br>
        The festival will take place as an in-person event at the Cine Humberto Mauro / Palácio das Artes and its
        closing event will be held at the Cine Santa Tereza.</br></br>
        The Black Film-Writings section will be available for online access during the festival except for the films:
        eu, negra, directed by Juh Almeida, and Entre a Colônia e as Estrelas, directed by Lorran Dias. Download the
        program and check the dates for the screenings, international talks, and Q&A’s from the Black Film-Writings
        section.</br></br>
        The full program is free of charge to the audience.
      </p>
    </div>
    <div class="mainIllus dowloadContainer">
      <div class="pdfCover program-cover"></div>
      <p lang="pt">Confira a programação completa do Festival.</p>
      <p lang="en">Check the complete program of the Festival.</p>
      <a target="_blank" href="./docs/PROGRAMAÇÃO_2_SEMANA_DE_CINEMA_NEGRO.pdf" class="btn download"
        title="Download">DOWNLOAD PDF</a>
    </div>
</div>
</section>
</div>
<?php
  getFooterOpen(); 
?>
<script src="js/search.js"></script>
<script src="js/main.js"></script>
<script>
translate();
</script>
</body>

</html>