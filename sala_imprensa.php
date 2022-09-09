<?php
require_once __DIR__ . '/function.php';
getHeader();
?>
<div class="page">
  <section>
    <div class="mainBanner"
      style="background-image: url('./mostras/img/banners/banner10.jpg'); background-position: center; height: 500px">
      <div class="mainInfo" style="color:var(--cor-yellow);text-align:left;margin-top: -50px;">
        <div class="title">
          <h1 lang="pt">SALA DE</h1>
          <h1 lang="pt" style="color: var(--cor-lightpink);margin-left: 30px; position: absolute; left:200px">
            IMPRENSA</h1>
          <h1 lang="en">PRESS</h1>
          <h1 lang="en" style="color: var(--cor-lightpink);margin-left: 30px; position: absolute; left:50px">
            ROOM</h1>
        </div>
      </div>
      <div class="pressInfoContainer">
        <h2>Para falar com nossa assessoria de imprensa, entre em contato com:
        </h2>
        <h3 style="color: var(--cor-yellow);">FORTELECÊNCIA ASSESSORIA
        </h3>
        <div class="pressInfoItem">
          <img lang="pt" src="./img/icons/mail.svg" alt="Emails" />
          fortalecencia@gmail.com | jornalismomarianacordeiro@gmail.com
        </div>
        <div class="pressInfoItem">
          <img lang="pt" src="./img/icons/phone.svg" alt="Phone" />
          +55 (31) 98782-1287
        </div>
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