<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />
    <title>Connexion</title>
  </head>
  <body>
    <div class="logo">
      <img alt="logo-firefoxd3vfr" src="./img/logo.png" />
      <a id="title" href="./connectAccount.php">FireFøx_d3vFR</a>
    </div>

    <div class="container">
      <h1>Connexion à votre compte 👏</h1>

      <div class="social-login">
        <button class="google">
          <i class="bx bxl-google"></i>
          Continuer avec Google
        </button>
        <button class="microsoft">
          <i class="bx bxl-microsoft"></i>
          Continuer avec Microsoft
        </button>
      </div>

      <div class="divider">
        <div class="line"></div>
        <p>Ou</p>
        <div class="line"></div>
      </div>

      <form>
        <label for="prenom">Pseudo :</label>
        <div class="custome-input">
          <input
            type="text"
            name="pseudo"
            placeholder="Votre pseudo"
            autocomplete="off"
          />
          <i class="bx bx-user"></i>
        </div>

        <label for="password">Mot de passe:</label>
        <div class="custome-input">
          <input
            type="password"
            name="password"
            placeholder="Votre Mot de passe"
            autocomplete="off"
          />
          <i class="bx bx-lock-alt"></i>
          <div class="linksPswd">
            <a href="forgetPassword.html">Mot de passe oublié ?</a>
          </div>
        </div>

        <button type="button" class="login">Se Connecter</button>

        <div class="linksAccount">
          <p>
            Vous n'avez pas de compte ?
            <a href="createAccount.php">Inscription</a>
          </p>
        </div>
      </form>
    </div>
  </body>
</html>
