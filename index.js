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
 
 const draw = () => {
    const container = document.getElementById("gameboard")

    let data = Levels[0]
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
    return null
 }
 console.log(draw())