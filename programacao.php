<?php
require_once __DIR__ . '/function.php';
getHeader();
?>
<div class="page">
    <section>
        <div class="mainBanner"
            style="background-image: url('./mostras/img/banners/banner2.jpg'); background-position: center; height: 200px">
            <div class="mainInfo" style="color:var(--cor-yellow);text-align:left;margin-top: -50px;">
                <div class="title">
                    <h1 lang="pt">PROGRAM<span style="color: var(--cor-lightpink)">AÇÃO</span></h1>
                    <h1 lang="en">PRO<span style="color: var(--cor-lightpink)">GRAM</span></h1>

                </div>
            </div>
        </div>
    </section>
    <section class=" programInfo">
        <div class="mainSubtitle"
            style="border-left: 5px solid var(--cor-lilac); flex-direction: column; margin: 0 3rem 0 3rem; gap: unset; text-align: left">
            <p lang="pt" style="padding: 0; width: 100%; margin-left: 50px;">
                Aqui você encontra a programação da 2º Semana de Cinema Negro de Belo Horizonte para
                download.
                O festival acontece de forma presencial no Cine Humberto Mauro/ Palácio das Artes e
                seu encerramento no
                Cine Santa Tereza.
            </p>
            <p lang="en" style="padding: 0; width: 100%; margin-left: 50px;">
                Here, you will find the Black Film Week program available for download. The Black
                Film-Writings
                section will be entirely
                available online during all days of the festival, except for 3 films with scheduled
                screening dates.
                The remaining sections
                have a scheduled date for online access. Download the program and check the films’
                screening dates,
                as well as the schedule
                of international talks and Q&A's of the Black Film-Writings section.
            </p>
            <p lang="pt" style="padding: 0; width: 100%; margin-left: 50px;">
                A mostra <em>Cine-Escrituras Pretas</em> estará disponível on-line ao longo dos dias
                de festival, exceto
                os
                filmes <em>eu,negra</em>, de Juh Almeida, e <em>Entre Colônia e as Estrelas</em>, de
                Lorran Dias. Baixe
                a programação e
                veja as datas de exibição dos filmes, das conversas internacionais e dos debates da
                mostra
                <em>Cine-Escrituras Pretas</em>.
            </p>
            <p lang="en" style="padding: 0; width: 100%; margin-left: 50px;"></p>
            <p lang="pt" style="padding: 0; width: 100%; margin-left: 50px;">
                Toda a programação é gratuita.
            </p>
            <p lang="en"></p>
        </div>
        <div class="mainIllus dowloadContainer">
            <div class="pdfCover program-cover"></div>
            <p lang="pt">Confira a programação completa do Festival.</p>
            <p lang="en">Check the complete program of the Festival.</p>
            <a target="_blank"
                href="https://drive.google.com/file/d/1NqbhHopCd8VSw6lVyHNFp6_aFxQj_URQ/view?usp=sharingf"
                download="Programação" class="btn download" title="Download">DOWNLOAD PDF</a>
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