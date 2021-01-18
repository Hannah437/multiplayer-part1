class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    player.getPlayerInfo();
    if(allplayers !== undefined){
      var yPosition = 130;
      for(var plr in allplayers){
        if( plr == "player" + player.index){
          fill("red");
        }
        else{
          fill("black");
        }
        yPosition += 20;
        textSize(15);
        text(allplayers[plr].name + " : " + allplayers[plr].distance)
      }
    }
  }
}

