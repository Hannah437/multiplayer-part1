class Form {
  constructor() {
    this.title = createElement('h2');
   this.input = createInput("Name");
    this.button = createButton('Play');
  }

  display(){
    
    this.title.html("Car Racing Game");
    this.title.position(130, 0);
    
    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

     this.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting = createElement('h3');
      this.greeting.html("Hello " + this.name )
      this.greeting.position(130, 160)
    });

  }
}
