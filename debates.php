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
      <div class="debateContainer"></div>
    </section></div>
<?php
  getFooterOpen();
?>
    <script src="js/search.js"></script>
<script src="js/debates.js"></script>
<script src="js/main.js"></script>
<script>translate();</script>
  </body>
</html>
