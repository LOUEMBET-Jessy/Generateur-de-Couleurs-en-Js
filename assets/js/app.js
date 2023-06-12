
function changeColor() {



    // Générer une couleur aléatoire
    var randomColor = getRandomColor();

    // Modifier la couleur d'arrière-plan de la div
    var colorDiv = document.getElementById("colorDiv");
    colorDiv.style.backgroundColor = randomColor;

    // Afficher le code couleur correspondant
    alert("Code couleur : " + randomColor);
  }

  function getRandomColor() {
    // Générer une couleur aléatoire au format hexadécimal
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }