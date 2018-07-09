let x = Math.floor(Math.random()* 10);
function checknumber(x){
  
};
let count = true;
let arrayList = [];

  
    for(let i = 0; i<10; i++){
      let y = prompt("what number do you think?");
    arrayList.push(y);
     if(x == y)
     {
       alert("you win");
     }
     if(x<y){
       alert('you numer '+y+' too high. Your previous number: '+arrayList);
       
     }
     if(x>y){
       alert('you numer '+y+' too low. Your previous number: '+arrayList);
     }
    }
    
      
    


