$( document ).ready(function(){
    // Generates random number 
    var Random=Math.floor(Math.random()*102+19)
    
    // Display random number
    $('#randomNumber').text(Random);
    
    //Generate random number for each crystal
    var num1= Math.floor(Math.random()*12+1)
    var num2= Math.floor(Math.random()*12+1)
    var num3= Math.floor(Math.random()*12+1)
    var num4= Math.floor(Math.random()*12+1)
    
    // Variables to keep track of wins, losses and total
    var currentScore= 0; 
    var wins= 0;
    var losses = 0;
    
  
  $('#wins').text(wins);
  $('#losses').text(losses);
  
  // Reset game
  function reset(){
        Random=Math.floor(Math.random()*102+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*12+1);
        num2= Math.floor(Math.random()*12+1);
        num3= Math.floor(Math.random()*12+1);
        num4= Math.floor(Math.random()*12+1);
        currentScore= 0;
        $('#currentScore').text(currentScore);
        } 


  // Display wins
  function winner(){
  alert("Congrats! You won!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }
  // Display losses
  function loser(){
  alert ("Sorry! You lose!");
    losses++;
    $('#losses').text(losses);
    reset()
  }
  // Clicking crystals
    $('#redGem').on ('click', function(){
      currentScore = currentScore + num1;
      $('#currentScore').text(currentScore); 
            //Win & lose conditions
          if (currentScore == Random){
            winner();
          }
          else if ( currentScore > Random){
            loser();
          }   
    })  
    $('#blueGem').on ('click', function(){
      currentScore = currentScore + num2;
      $('#currentScore').text(currentScore); 
          if (currentScore == Random){
            winner();
          }
          else if ( currentScore > Random){
            loser();
          } 
    })  
    $('#greenGem').on ('click', function(){
      currentScore = currentScore + num3;
      $('#currentScore').text(currentScore);
  
            if (currentScore == Random){
            winner();
          }
          else if ( currentScore > Random){
            loser();
          } 
    })  
    $('#purpleGem').on ('click', function(){
      currentScore = currentScore + num4;
      $('#currentScore').text(currentScore); 
        
            if (currentScore == Random){
            winner();
          }
          else if ( currentScore > Random){
            loser();
          }
    });   
  }); 

  



