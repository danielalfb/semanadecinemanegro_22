<?php
function getHeader() { 
  $activePage = basename($_SERVER['PHP_SELF'], ".php");
  ?> 
 <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
    <meta charset="pt-BR" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Site que abriga o festival Semana de Cinema Negro de Belo Horizonte, que promove exibições fílmicas de cineatas negros brasileiros, africanos e daa diáspora. Promovemos debates, seminários e oficinas." />
    <meta name="keywords" content="scnegrobh, cinema negro, cinema negro bh, cinema bh, cinema nacional, filmes brasileiros,festival de cinema, cinema, belo horizonte" />
    <meta name="author" content="" />
    <title>2ª Semana de Cinema Negro de Belo Horizonte</title>
    <link rel="icon" type="image/png" href="./img/favicon.png"/>
    <link rel="stylesheet" type="text/css" href="./css/main.css" />
    <link rel="stylesheet" type="text/css" href="./css/screen.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
   <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-MTZQJ6P6MP"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-MTZQJ6P6MP');
      </script>
    </head>
  <body>
  <!-- HEADER -->
  <div class="full-header">
    <div class="banner-header">
      <div class="subtitle"><p>Festival de Cinema Intercâmbio Cultural Brasil-África</p></div>  
      <div class="navigation">
        <div class="search-container">
          <form>
            <input  lang="pt" type="text" name="search" class="searchBarPT" placeholder="Pesquisa">
          <input  lang="en" type="text" name="search" class="searchBarEN" placeholder="Search">
          <button type="submit" id="searchButton"><em class="fa fa-search"></em></button>
          </form>
        </div>
        <div class="social-media">
          <a href="https://instagram.com/semana.cinemanegrobh?igshid=1d6oomjwgo5aj" target="_blank"><em class="fab fa-instagram"></em></a>
          <a href="https://www.facebook.com/semana.cinemanegrobh" target="_blank"><em class="fab fa-facebook-f"></em></a>
          <a href="https://www.youtube.com/channel/UCWEYVmhTOymK86IAzCmC70g" target="_blank"><em class="fab fa-youtube"></em></a>
          <a href="https://twitter.com/scnegrobh" target="_blank"><em class="fab fa-twitter"></em></a>
        </div>        
      </div>
    </div>
    <div class="container-header header">
        <div class="logo-menu">
          <a href="/index"><img src="./img/logo_purple.png" class="logo" alt="Logo Menu" title="Início"/></a>
        </div>
        <div class="navbar">
        <div class="menu__icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div> 
        <div class="menu__links">
          <ul id="nav-list">
            <li lang="pt"><a class="<?= ($activePage == 'index') ? 'active':''; ?>" href="http://localhost/semanadecinemanegro_22/index.php">Início</a></li>
            <li lang="en"><a class="<?= ($activePage == 'index') ? 'active':''; ?>" href="http://localhost/semanadecinemanegro_22/index.php">Home</a></li>
            <li lang="pt"><a class="<?= ($activePage == 'programacao') ? 'active':''; ?>" href="http://localhost/semanadecinemanegro_22/programacao.php">Programação</a></li>
            <li lang="en"><a class="<?= ($activePage == 'programacao') ? 'active':''; ?>" href="http://localhost/semanadecinemanegro_22/programacao.php">Program</a></li>
           <div class="dropdown">
               <li lang="pt"><a>Mostras <em class="fas fa-chevron-down"></em></a></li>
               <li lang="en"><a>Exhbits <em class="fas fa-chevron-down"></em></a></li>
               <div class="dropdown-content">
                  <li lang="pt"><a href="http://localhost/semanadecinemanegro_22/mostras/no_palco_nas_telas.php">Maria José Novais Oliveira - Nossa atriz</a></li>
                  <li lang="en"><a href="http://localhost/semanadecinemanegro_22/mostras/no_palco_nas_telas.php">Maria José Novais Oliveira - Our Actress</a></li>
                  <li lang="pt"><a href="http://localhost/semanadecinemanegro_22/mostras/cinemas_africanos.php">Cinemas Africanos em revista: as origens do FESPACO</a></li>
                  <li lang="en"><a href="http://localhost/semanadecinemanegro_22/mostras/cinemas_africanos.php">African Films Revisited: The Origins of FESPACO</a></li>
                  <li lang="pt"><a href="http://localhost/semanadecinemanegro_22/mostras/med_hondo.php">Surreal16 Collective, Um Novo Olhar para o Cinema Nigeriano</a></li>
                  <li lang="en"><a href="http://localhost/semanadecinemanegro_22/mostras/med_hondo.php">Surreal16 Collective, a new look at nigerian cinema</a></li>
                  <li lang="pt"><a href="http://localhost/semanadecinemanegro_22/mostras/nicho_54.php">Cinema, negritude e poesia: Uma homenagem a Sarah Maldoror</a></li>
                  <li lang="en"><a href="http://localhost/semanadecinemanegro_22/mostras/nicho_54.php">Film, Blackness and Poetry: A tribute to Sarah Maldoror</a></li>
                  <li lang="pt"><a href="http://localhost/semanadecinemanegro_22/mostras/ibejis.php">Ibejis</a></li>
                  <li lang="en"><a href="http://localhost/semanadecinemanegro_22/mostras/ibejis.php">Ibejis</a></li>
                  <li lang="pt"><a href="http://localhost/semanadecinemanegro_22/mostras/cine_escrituras_pretas.php">Cine-Escrituras Pretas</a></li>
                  <li lang="en"><a href="http://localhost/semanadecinemanegro_22/mostras/cine_escrituras_pretas.php">Black Film-Writings</a></li>
               </div>
           </div>
           <div class="dropdown">
               <li lang="pt"><a>Atividades <em class="fas fa-chevron-down"></em></a></li>
               <li lang="en"><a>Activities <em class="fas fa-chevron-down"></em></a></li>
               <div class="dropdown-content">
                  <li lang="pt"><a href="http://localhost/semanadecinemanegro_22/oficinas.php">Oficinas</a></li>
                  <li lang="en"><a href="http://localhost/semanadecinemanegro_22/oficinas.php">Workshops</a></li>
                  <li lang="pt"><a href="http://localhost/semanadecinemanegro_22/debates.php">Conversas e Debates</a></li>                  
                  <li lang="en"><a href="http://localhost/semanadecinemanegro_22/debates.php">Talks and Q&A's</a></li>                  
               </div>
           </div>
            <li lang="pt"><a class="<?= ($activePage == 'catalogo') ? 'active':''; ?>" href="http://localhost/semanadecinemanegro_22/catalogo.php">Catálogo</a></li>
            <li lang="en"><a class="<?= ($activePage == 'catalogo') ? 'active':''; ?>" href="http://localhost/semanadecinemanegro_22/catalogo.php">Catalog</a></li>
            <li lang="pt"><a  class="<?= ($activePage == 'creditos') ? 'active':''; ?>" href="http://localhost/semanadecinemanegro_22/creditos.php">Créditos</a></li>
            <li lang="en"><a  class="<?= ($activePage == 'creditos') ? 'active':''; ?>" href="http://localhost/semanadecinemanegro_22/creditos.php">Credits</a></li>
           
         </ul>
        </div>
      </div>
      <div id="language" class="language">
        <ul>
        <li lang="pt" id="pt_click" class="button_lang"><a><img lang="pt" src="./img/icons/translate.png" alt="English"/>English</a></li>
        <li lang="en" id="en_click" class="button_lang"><a><img lang="en" src="./img/icons/translate.png" alt="Português"/>Português</a></li>
        </ul>
      </div>
      </div>
  </div>
 <?php }

function getHeaderMostras() { 
  $activePage = basename($_SERVER['PHP_SELF'], ".php");
  ?> 
 <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
    <meta charset="pt-BR" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Site que abriga o festival Semana de Cinema Negro de Belo Horizonte, que promove exibições fílmicas de cineatas negros brasileiros, africanos e daa diáspora. Promovemos debates, seminários e oficinas." />
    <meta name="keywords" content="scnegrobh, cinema negro, cinema negro bh, cinema bh, cinema nacional, filmes brasileiros,festival de cinema, cinema, belo horizonte" />
    <meta name="author" content="" />
    <title>2ª Semana de Cinema Negro de Belo Horizonte</title>
    <link rel="icon" type="image/png" href="../img/favicon.png"/>
    <link rel="stylesheet" type="text/css" href="../css/main.css" />
    <link rel="stylesheet" type="text/css" href="../css/screen.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
   <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-MTZQJ6P6MP"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-MTZQJ6P6MP');
      </script>
    </head>
  <body>
  <!-- HEADER -->
  <div class="full-header">
    <div class="banner-header">
      <div class="subtitle"><p>Festival de Cinema Intercâmbio Cultural Brasil-África</p></div>  
      <div class="navigation">
        <div class="search-container">
          <form>
            <input  lang="pt" type="text" name="search" class="searchBarPT" placeholder="Pesquisa">
          <input  lang="en" type="text" name="search" class="searchBarEN" placeholder="Search">
          <button type="submit" id="searchButton"><em class="fa fa-search"></em></button>
          </form>
        </div>
        <div class="social-media">
          <a href="https://instagram.com/semana.cinemanegrobh?igshid=1d6oomjwgo5aj" target="_blank"><em class="fab fa-instagram"></em></a>
          <a href="https://www.facebook.com/semana.cinemanegrobh" target="_blank"><em class="fab fa-facebook-f"></em></a>
          <a href="https://www.youtube.com/channel/UCWEYVmhTOymK86IAzCmC70g" target="_blank"><em class="fab fa-youtube"></em></a>
          <a href="https://twitter.com/scnegrobh" target="_blank"><em class="fab fa-twitter"></em></a>
        </div>        
      </div>
    </div>
    <div class="container-header header">
        <div class="logo-menu">
          <a href="/index"><img src="./img/logo_purple.png" class="logo" alt="Logo Menu" title="Início"/></a>
        </div>
        <div class="navbar">
        <div class="menu__icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div> 
        <div class="menu__links">
          <ul id="nav-list">
            <li lang="pt"><a class="<?= ($activePage == 'index') ? 'active':''; ?>" href="http://localhost/semanadecinemanegro_22/index.php">Início</a></li>
            <li lang="en"><a class="<?= ($activePage == 'index') ? 'active':''; ?>" href="http://localhost/semanadecinemanegro_22/index.php">Home</a></li>
            <li lang="pt"><a class="<?= ($activePage == 'programacao') ? 'active':''; ?>" href="http://localhost/semanadecinemanegro_22/programacao.php">Programação</a></li>
            <li lang="en"><a class="<?= ($activePage == 'programacao') ? 'active':''; ?>" href="http://localhost/semanadecinemanegro_22/programacao.php">Program</a></li>
           <div class="dropdown">
               <li lang="pt"><a>Mostras <em class="fas fa-chevron-down"></em></a></li>
               <li lang="en"><a>Exhbits <em class="fas fa-chevron-down"></em></a></li>
               <div class="dropdown-content">
                  <li lang="pt"><a href="http://localhost/semanadecinemanegro_22/mostras/no_palco_nas_telas.php">Maria José Novais Oliveira - Nossa atriz</a></li>
                  <li lang="en"><a href="http://localhost/semanadecinemanegro_22/mostras/no_palco_nas_telas.php">Maria José Novais Oliveira - Our Actress</a></li>
                  <li lang="pt"><a href="http://localhost/semanadecinemanegro_22/mostras/cinemas_africanos.php">Cinemas Africanos em revista: as origens do FESPACO</a></li>
                  <li lang="en"><a href="http://localhost/semanadecinemanegro_22/mostras/cinemas_africanos.php">African Films Revisited: The Origins of FESPACO</a></li>
                  <li lang="pt"><a href="http://localhost/semanadecinemanegro_22/mostras/med_hondo.php">Surreal16 Collective, Um Novo Olhar para o Cinema Nigeriano</a></li>
                  <li lang="en"><a href="http://localhost/semanadecinemanegro_22/mostras/med_hondo.php">Surreal16 Collective, a new look at nigerian cinema</a></li>
                  <li lang="pt"><a href="http://localhost/semanadecinemanegro_22/mostras/nicho_54.php">Cinema, negritude e poesia: Uma homenagem a Sarah Maldoror</a></li>
                  <li lang="en"><a href="http://localhost/semanadecinemanegro_22/mostras/nicho_54.php">Film, Blackness and Poetry: A tribute to Sarah Maldoror</a></li>
                  <li lang="pt"><a href="http://localhost/semanadecinemanegro_22/mostras/ibejis.php">Cine-Escrituras Pretas</a></li>
                  <li lang="en"><a href="http://localhost/semanadecinemanegro_22/mostras/ibejis.php">Black Film-Writings</a></li>
               </div>
           </div>
           <div class="dropdown">
               <li lang="pt"><a>Atividades <em class="fas fa-chevron-down"></em></a></li>
               <li lang="en"><a>Activities <em class="fas fa-chevron-down"></em></a></li>
               <div class="dropdown-content">
                  <li lang="pt"><a href="http://localhost/semanadecinemanegro_22/oficinas.php">Oficinas</a></li>
                  <li lang="en"><a href="http://localhost/semanadecinemanegro_22/oficinas.php">Workshops</a></li>
                  <li lang="pt"><a href="http://localhost/semanadecinemanegro_22/debates.php">Conversas e Debates</a></li>                  
                  <li lang="en"><a href="http://localhost/semanadecinemanegro_22/debates.php">Talks and Q&A's</a></li>                  
               </div>
           </div>
            <li lang="pt"><a class="<?= ($activePage == 'catalogo') ? 'active':''; ?>" href="http://localhost/semanadecinemanegro_22/catalogo.php">Catálogo</a></li>
            <li lang="en"><a class="<?= ($activePage == 'catalogo') ? 'active':''; ?>" href="http://localhost/semanadecinemanegro_22/catalogo.php">Catalog</a></li>
            <li lang="pt"><a  class="<?= ($activePage == 'creditos') ? 'active':''; ?>" href="http://localhost/semanadecinemanegro_22/creditos.php">Créditos</a></li>
            <li lang="en"><a  class="<?= ($activePage == 'creditos') ? 'active':''; ?>" href="http://localhost/semanadecinemanegro_22/creditos.php">Credits</a></li>
           
         </ul>
        </div>
      </div>
      <div id="language" class="language">
        <ul>
        <li lang="pt" id="pt_click" class="button_lang"><a><img lang="pt" src="./img/icons/translate.png" alt="English"/>English</a></li>
        <li lang="en" id="en_click" class="button_lang"><a><img lang="en" src="./img/icons/translate.png" alt="Português"/>Português</a></li>
        </ul>
      </div>
      </div>
  </div>
 <?php }
 
function getFooterOpen() { ?>
<!-- <div class="patrocinio"><div class="patrocinio-img"></div></div> -->
<img style="width: 100%; background-color: #f8f8f8" src="../img/logomarcas.png" alt="" />
<footer class="footer-distributed">

<div class="footer-left">
  <a href="/inicio"><img src="./img/logo_branca.svg" class="logo" alt="Logo Footer"/></a>
  <div>
          <ul>
          <li lang="pt"><a href="/mostras/no_palco_nas_telas">Maria José Novais Oliveira - Nossa atriz</a></li>
                  <li lang="en"><a href="/mostras/no_palco_nas_telas">Maria José Novais Oliveira - Our Actress</a></li>
                  <li lang="pt"><a href="/mostras/cinemas_africanos">Cinemas Africanos em revista: as origens do FESPACO</a></li>
                  <li lang="en"><a href="/mostras/cinemas_africanos">African Films Revisited: The Origins of FESPACO</a></li>
                  <li lang="pt"><a href="/mostras/med_hondo">Surreal16 Collective, Um Novo Olhar para o Cinema Nigeriano</a></li>
                  <li lang="en"><a href="/mostras/med_hondo">Surreal16 Collective, a new look at nigerian cinema</a></li>
                  <li lang="pt"><a href="/mostras/nicho_54">Cinema, negritude e poesia: Uma homenagem a Sarah Maldoror</a></li>
                  <li lang="en"><a href="/mostras/nicho_54">Film, Blackness and Poetry: A tribute to Sarah Maldoror</a></li>
                  <li lang="pt"><a href="/mostras/ibejis">Cine-Escrituras Pretas</a></li>
                  <li lang="en"><a href="/mostras/ibejis">Black Film-Writings</a></li>
        </ul>
    </div>
</div>

<div class="footer-center">
      <ul>
            <li lang="pt"><a href="/oficinas">Oficinas</a></li>
            <li lang="en"><a href="/oficinas">Workshops</a></li>
            <li lang="pt"><a href="/debates"> Conversas e Debates</a></li>
            <li lang="en"><a href="/debates"> Talks and Q&A's</a></li>
            <li lang="pt"><a href="/programacao">Programação</a></li>
            <li lang="en"><a href="/programacao">Program</a></li>
            <li lang="pt"><a href="/catalogo">Catálogo</a></li>
            <li lang="en"><a href="/catalogo">Catalog</a></li>
            <li lang="pt"><a href="/creditos">Créditos</a></li>
            <li lang="en"><a href="/creditos">Credits</a></li>
          </ul>
</div>
<div class="footer-right">
  <p lang ="pt" class="footer-about">
    Semana de Cinema Negro de Belo Horizonte</br>
    <strong>scnegrobh@gmail.com</strong>
    </p>
  <p lang ="en" class="footer-about">
    Belo Horizonte Black Film Week</br>
    <strong>scnegrobh@gmail.com</strong>
    </p>
</div>
<div class="border"></div>
<div class="footer-icons">
<a href="https://instagram.com/semana.cinemanegrobh?igshid=1d6oomjwgo5aj" target="_blank"><em class="fab fa-instagram"></em></a>
       <a href="https://www.facebook.com/semana.cinemanegrobh" target="_blank"><em class="fab fa-facebook-f"></em></a>
       <a href="https://www.youtube.com/channel/UCWEYVmhTOymK86IAzCmC70g" target="_blank"><em class="fab fa-youtube"></em></a>
       <a href="https://twitter.com/scnegrobh" target="_blank"><em class="fab fa-twitter"></em></a>
  </div>
</footer>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>

<?php }