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
 
const draw = (data) => {
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
            } else if (data[i][j] == 4){
                let newdiv = document.createElement('div')
                newdiv.style.backgroundImage = `url(assets/flag.png)`
                container.appendChild(newdiv)
            } else if (data[i][j] == 5) {
                let newdiv = document.createElement('div')
                newdiv.style.backgroundImage = `url(assets/crate2.png)`
                container.appendChild(newdiv) 
            }
        }
    }

    return data
}

function functionStockFlag(data) {
    let stockFlag = []
    
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[0].length; j++) {
            if (data[i][j] === 4) {
                stockFlag.push([i, j])
            }
        }
    }

    return stockFlag
}

function deplacerPersonnage(tableau, direction, stockFlag) {
    // Obtenir les positions du joueur

    let pos_x, pos_y;
    for (let i = 0; i < tableau.length; i++) {
      for (let j = 0; j < tableau[0].length; j++) {
        if (tableau[i][j] === 3) {
          pos_x = i;
          pos_y = j;
        } else if (tableau[i][j] === 4) {
            stockFlag.push([i, j])
        }
      }
    }

    // Déplacer le personnage en fonction de la direction
    if (direction === 38 && pos_x > 0 && tableau[pos_x-1][pos_y] !== 1) {
        // Changer position cube
        if (tableau[pos_x-1][pos_y] == 2 || tableau[pos_x-1][pos_y] == 5) {
            if (tableau[pos_x-2][pos_y] == 0) {
                tableau[pos_x-1][pos_y] = 3
                tableau[pos_x-2][pos_y] = 2
                tableau[pos_x][pos_y] = 0
            } else if (tableau[pos_x-2][pos_y] == 4) {
                tableau[pos_x-1][pos_y] = 3
                tableau[pos_x-2][pos_y] = 5
                tableau[pos_x][pos_y] = 0
            }
        } else if (tableau[pos_x-1][pos_y] == 5 && tableau[pos_x-2][pos_y] !== 1) {
            if (tableau[pos_x-2][pos_y] = 4) {
                tableau[pos_x-1][pos_y] = 3
                tableau[pos_x-2][pos_y] = 5
                tableau[pos_x][pos_y] = 0
            } else if (tableau[pos_x-2][pos_y] = 0) {
                tableau[pos_x-1][pos_y] = 3
                tableau[pos_x-2][pos_y] = 2
                tableau[pos_x][pos_y] = 0
            }
        }else {
            tableau[pos_x][pos_y] = 0
            tableau[pos_x-1][pos_y] = 3
        }
    } else if (direction === 40 && pos_x < tableau.length-1 && tableau[pos_x+1][pos_y] !== 1) {
        // Changer position cube
        if (tableau[pos_x+1][pos_y] == 2 || tableau[pos_x+1][pos_y] == 5) {
            if (tableau[pos_x+2][pos_y] == 0) {
                tableau[pos_x+1][pos_y] = 3
                tableau[pos_x+2][pos_y] = 2
                tableau[pos_x][pos_y] = 0
            } else if (tableau[pos_x+2][pos_y] == 4) {
                tableau[pos_x+1][pos_y] = 3
                tableau[pos_x+2][pos_y] = 5
                tableau[pos_x][pos_y] = 0
            }
        } else if (tableau[pos_x+1][pos_y] == 5 && tableau[pos_x+2][pos_y] !== 1) {
            if (tableau[pos_x+2][pos_y] = 4) {
                tableau[pos_x+1][pos_y] = 3
                tableau[pos_x+2][pos_y] = 5
                tableau[pos_x][pos_y] = 0
            } else if (tableau[pos_x+2][pos_y] = 0) {
                tableau[pos_x+1][pos_y] = 3
                tableau[pos_x+2][pos_y] = 2
                tableau[pos_x][pos_y] = 0
            }
        } else {
            tableau[pos_x][pos_y] = 0
            tableau[pos_x+1][pos_y] = 3
        }
    } else if (direction === 37 && pos_y > 0 && tableau[pos_x][pos_y-1] !== 1) {
        // Changer position cube
        if (tableau[pos_x][pos_y-1] == 2 || tableau[pos_x][pos_y-1] == 5) {
            if (tableau[pos_x][pos_y-2] == 0) {
                tableau[pos_x][pos_y-1] = 3
                tableau[pos_x][pos_y-2] = 2
                tableau[pos_x][pos_y] = 0
            } else if (tableau[pos_x][pos_y-2] == 4) {
                tableau[pos_x][pos_y-1] = 3
                tableau[pos_x][pos_y-2] = 5
                tableau[pos_x][pos_y] = 0
            }
        } else if (tableau[pos_x][pos_y-1] == 5 && tableau[pos_x][pos_y-2] !== 1) {
            if (tableau[pos_x][pos_y-2] = 4) {
                tableau[pos_x][pos_y-1] = 3
                tableau[pos_x][pos_y-2] = 5
                tableau[pos_x][pos_y] = 0
            } else if (tableau[pos_x][pos_y-2] = 0) {
                tableau[pos_x][pos_y-1] = 3
                tableau[pos_x][pos_y-2] = 2
                tableau[pos_x][pos_y] = 0
            }
        } else {
            tableau[pos_x][pos_y] = 0
            tableau[pos_x][pos_y-1] = 3
        }
    } else if (direction === 39 && pos_y < tableau[0].length-1 && tableau[pos_x][pos_y+1] !== 1) {
        // Changer position cube
        if (tableau[pos_x][pos_y+1] == 2 || tableau[pos_x][pos_y+1] == 5) {    
            if (tableau[pos_x][pos_y+2] == 0) {
                tableau[pos_x][pos_y+1] = 3
                tableau[pos_x][pos_y+2] = 2
                tableau[pos_x][pos_y] = 0
            } else if (tableau[pos_x][pos_y+2] == 4) {
                tableau[pos_x][pos_y+1] = 3
                tableau[pos_x][pos_y+2] = 5
                tableau[pos_x][pos_y] = 0
            }
        } else if (tableau[pos_x][pos_y+1] == 5 && tableau[pos_x][pos_y+2] !== 1) {
            if (tableau[pos_x][pos_y+2] = 4) {
                tableau[pos_x][pos_y+1] = 3
                tableau[pos_x][pos_y+2] = 5
                tableau[pos_x][pos_y] = 0
            } else if (tableau[pos_x][pos_y+2] = 0) {
                tableau[pos_x][pos_y+1] = 3
                tableau[pos_x][pos_y+2] = 2
                tableau[pos_x][pos_y] = 0
            }
        } else {
            tableau[pos_x][pos_y] = 0
            tableau[pos_x][pos_y+1] = 3
        }
    }

    // Flag
    for (let i = 0; i < stockFlag.length; i++) {
        if (tableau[stockFlag[i][0]][stockFlag[i][1]] == 0) {
            tableau[stockFlag[i][0]][stockFlag[i][1]] = 4
        }
    }
    
    // Retourner le tableau modifié
    console.log(tableau);
    return tableau;
}

function attemptLevelInner(attemptLevel) {
    document.querySelector('.attemptLevel').innerHTML = `ATTEMPT LEVEL : ${attemptLevel}`
}

function attemptTotalInner(attemptTotal) {
    document.querySelector('.attemptTotal').innerHTML = `ATTEMPT TOTAL : ${attemptTotal}`
}
  
let level = 0
let attemptLevel = 0
let attemptTotal = 0
let data = JSON.parse(JSON.stringify(Levels[level])); 
let stockFlag = functionStockFlag(data)

document.addEventListener("keydown", function(event) {
    switch (event.keyCode) {
      case 38: // Flèche haut
        attemptLevel++
        attemptTotal++
        attemptLevelInner(attemptLevel)
        attemptTotalInner(attemptTotal)
        data = deplacerPersonnage(data, 38, stockFlag)
        break;
      case 40: // Flèche bas
        attemptLevel++
        attemptTotal++
        attemptLevelInner(attemptLevel)
        attemptTotalInner(attemptTotal)
        data = deplacerPersonnage(data, 40, stockFlag)
        break;
      case 37: // Flèche gauche
        attemptLevel++
        attemptTotal++
        attemptLevelInner(attemptLevel)
        attemptTotalInner(attemptTotal)
        data = deplacerPersonnage(data, 37, stockFlag)
        break;
      case 39: // Flèche droite
        attemptLevel++
        attemptTotal++
        attemptLevelInner(attemptLevel)
        attemptTotalInner(attemptTotal)
        data = deplacerPersonnage(data, 39, stockFlag)
        break;
    }

    let compteur = 0
    for (let i = 0; i < stockFlag.length; i++) {
        if (data[stockFlag[i][0]][stockFlag[i][1]] == 5) {
            compteur++
        }
    }
    if (compteur == stockFlag.length) {
        attemptLevel = 0
        attemptLevelInner(attemptLevel)
        if(level <= 5 ){
            level++
            data = JSON.parse(JSON.stringify(Levels[level])); 
            stockFlag = []
            document.querySelector('.level').innerHTML = `LEVEL : ${level} / ${Levels.length-1}`
        }
    }
});

document.getElementById('resetButton').addEventListener('click', () => {
    data = JSON.parse(JSON.stringify(Levels[level])); 
    stockFlag = functionStockFlag(data)
})

function gameLoop() {
    document.getElementById('gameboard').innerHTML = ""
    draw(data)
    window.requestAnimationFrame(gameLoop)
}

window.requestAnimationFrame(gameLoop)