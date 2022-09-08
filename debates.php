<?php
require_once __DIR__ . '/function.php';
getHeader();
?>
<div class="page">
  <section>
    <div class="mainBanner" style="background-color: var(--cor-purple); margin-top: 50px; height: 200px">
      <div class="mainInfo" style="color: var(--cor-lightpink)">
        <div class="title">
          <h1 lang="pt">DEBATES</h1>
          <h1 lang="en">DEBATES</h1>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="mainSubtitle" style="border-left: 5px solid var(--cor-purple);">
      <p lang="pt">As conversas e os debates foram pensados para ampliar o pensamento ao redor dos filmes. Teremos
        conversas com convidades internacionais, além de debates com realizadoras e realizadores da mostra
        Cine-Escrituras Pretas. Todas as conversas acontecerão de forma presencial no Cine Humberto Mauro/ Palácio das
        Artes.</p>
      <p lang="en">As conversas e os debates foram pensados para ampliar o pensamento ao redor dos filmes. Teremos
        conversas com convidades internacionais, além de debates com realizadoras e realizadores da mostra
        Cine-Escrituras Pretas. Todas as conversas acontecerão de forma presencial no Cine Humberto Mauro/ Palácio das
        Artes.</p>
    </div>
  </section>
  <section>
    <div class="debateContainer"></div>
  </section>
</div>
<?php
  getFooterOpen();
?>
<script src="js/search.js"></script>
<script src="js/debates.js"></script>
<script src="js/main.js"></script>
<script>
translate();
</script>
</body>

</html>