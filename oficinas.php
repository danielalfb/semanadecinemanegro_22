<?php
require_once __DIR__ . '/function.php';
getHeader();
?>
<div class="page">
  <section>
    <div class="mainBanner" style="background-color: var(--cor-mustard); margin-top: 50px; height: 200px">
      <div class="mainInfo" style="color: var(--cor-lilac)">
        <div class="title">
          <h1 lang="pt">OFICINAS</h1>
          <h1 lang="en">CLASS</h1>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container containerOficina"></div>
  </section>
</div>
<?php
getFooterOpen();
?>
<script src="js/search.js"></script>
<script src="js/oficinas.js"></script>
<script src="js/main.js"></script>
<script>
translate();
</script>
</body>

</html>