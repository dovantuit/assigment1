let x = Math.floor(Math.random()* 10);
function checkdouble(x,arrayx){
  for( let i = 0; i< arrayx.length;i++){
    if(x == arrayx[i])
      return "you guessed this number already!";
  }
  return true;
};
let count = 10;
let pastGuesses = []; 

  
    for(let i = 0; i<10; i++){
      let y = prompt("what number do you think?");
    pastGuesses.push(y);
      if(checkdouble(y,pasGuessed)==true){
        if(x == y)
     {
       alert("you win");
     }
     if(x<y){
       count--;
       alert('you guesses of '+y+' was too high.You have '+ count+' guesses remaining. Your previous number: '+pastGuesses);
       
     }
     if(x>y){
       count--;
       alert('you guesses of '+y+' was too low. You have '+ count+' guesses remaining. Your previous number: '+pastGuesses);
     }
      }
     
    }
    
      
    


