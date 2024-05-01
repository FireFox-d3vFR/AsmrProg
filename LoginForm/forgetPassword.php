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
    <title>Récupération MDP</title>
  </head>
  <body>
    <div class="logo">
      <img alt="logo-firefoxd3vfr" src="./img/logo.png" />
      <a id="title" href="./connectAccount.php">FireFøx_d3vFR</a>
    </div>

    <div class="container">
      <h1>Mot de passe oublié ? 🥺</h1>

      <div class="information">
        <p>
          Saisissez votre adresse e-mail et nous vous enverrons des instructions
          pour réinitialiser votre mot de passe.
        </p>
      </div>

      <form method="post" action="sendMail.php">
        <label for="email">Email :</label>
        <div class="custome-input">
          <input
            type="text"
            name="email"
            placeholder="Votre email"
            autocomplete="off"
          />
          <i class="bx bx-at"></i>
        </div>

        <button type="submit" class="login">Envoyer</button>
      </form>

      <div class="linksAccount">
        <p>
          Vous voulez vous connecter ?
          <a href="connectAccount.php">Connexion</a>
        </p>
      </div>
    </div>
  </body>
</html>
