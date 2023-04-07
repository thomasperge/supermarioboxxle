import { Levels } from "./level.js";
 /**
  * You wan modify thes constants as you want or get rid of it, your choice
  * */ 

 const GRID_WIDTH = 50;
 const GRID_HEIGHT = 25;
 const fps = 10
 const keys = {
     37: 'left',
     39: 'right',
     38: 'up',
     40: 'down'
 }
let data = Levels[0]
 
const draw = () => {
    const container = document.getElementById("gameboard")

    for(let i = 0; i < data.length; i++){
        for(let j = 0; j < data[i].length; j++){
            
            if (data[i][j] == 0){
                let newdiv = document.createElement('div')
                newdiv.style.backgroundImage = `url(assets/floor.png)`
                container.appendChild(newdiv)
            } else if (data[i][j] == 1){
                let newdiv = document.createElement('div')
                newdiv.style.backgroundImage = `url(assets/wall.png)`
                container.appendChild(newdiv)
            } else if (data[i][j] == 2){
                let newdiv = document.createElement('div')
                newdiv.style.backgroundImage = `url(assets/crate.png)`
                container.appendChild(newdiv)
            } else if (data[i][j] == 3){
                let newdiv = document.createElement('div')
                newdiv.style.backgroundImage = `url(assets/mario.gif)`
                container.appendChild(newdiv)
            } else {
                let newdiv = document.createElement('div')
                newdiv.style.backgroundImage = `url(assets/flag.png)`
                container.appendChild(newdiv) 
            }
        }
    }
    return data
}

function deplacerPersonnage(tableau, direction) {
    // Get current position of player
    let pos_x, pos_y;
    for (let i = 0; i < tableau.length; i++) {
      for (let j = 0; j < tableau[0].length; j++) {
        if (tableau[i][j] === 3) {
          pos_x = i;
          pos_y = j;
        }
      }
    }
    
    // Déplacer le personnage en fonction de la direction
    if (direction === 38 && pos_x > 0 && tableau[pos_x-1][pos_y] !== 1) {
      [tableau[pos_x][pos_y], tableau[pos_x-1][pos_y]] = [tableau[pos_x-1][pos_y], tableau[pos_x][pos_y]];
    } else if (direction === 40 && pos_x < tableau.length-1 && tableau[pos_x+1][pos_y] !== 1) {
      [tableau[pos_x][pos_y], tableau[pos_x+1][pos_y]] = [tableau[pos_x+1][pos_y], tableau[pos_x][pos_y]];
    } else if (direction === 37 && pos_y > 0 && tableau[pos_x][pos_y-1] !== 1) {
      [tableau[pos_x][pos_y], tableau[pos_x][pos_y-1]] = [tableau[pos_x][pos_y-1], tableau[pos_x][pos_y]];
    } else if (direction === 39 && pos_y < tableau[0].length-1 && tableau[pos_x][pos_y+1] !== 1) {
      [tableau[pos_x][pos_y], tableau[pos_x][pos_y+1]] = [tableau[pos_x][pos_y+1], tableau[pos_x][pos_y]];
    }
    
    // Retourner le tableau modifié
    console.log(tableau);
    return tableau;
}
  

document.addEventListener("keydown", function(event) {
    switch (event.keyCode) {
      case 38: // Flèche haut
        deplacerPersonnage(data, 38)
        break;
      case 40: // Flèche bas
        deplacerPersonnage(data, 40)
        break;
      case 37: // Flèche gauche
        deplacerPersonnage(data, 37)
        break;
      case 39: // Flèche droite
        deplacerPersonnage(data, 39)
        break;
    }
});

requestAnimationFrame(draw())