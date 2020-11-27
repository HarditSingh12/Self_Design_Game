class Form  {
constructor(){
    this.input = createInput("Enter Your Name");
    this.button = createButton("Next");
   
    
  
}

display(){
this.input.position(100,100);
this.button.position(100,150);



  

this.button.mousePressed(()=>{

    this.input.hide();
    this.button.hide();

    this.inputQ1 = createInput("Question");
    this.inputA1 = createInput("Answer");

    this.inputQ2 = createInput("Question");
    this.inputA2 = createInput("Answer");

    this.inputQ3 = createInput("Question");
    this.inputA3 = createInput("Answer");

    this.inputQ4 = createInput("Question");
    this.inputA4 = createInput("Answer");

    this.inputQ5 = createInput("Question");
    this.inputA5 = createInput("Answer");

    this.buttonP = createButton("Play");

    
    this.inputQ1.position(50,50);
    this.inputA1.position(50,70);

    this.inputQ2.position(50,120);
    this.inputA2.position(50,140);

    this.inputQ3.position(50,190);
    this.inputA3.position(50,210);

    this.inputQ4.position(50,260);
    this.inputA4.position(50,280);

    this.inputQ5.position(50,330);
    this.inputA5.position(50,350);

    this.buttonP.position(100,480);
    this.buttonP.size(120,70);
    this.buttonP.style("font-size","40px")
    
     
   
});
   

}
}