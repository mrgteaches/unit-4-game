$(document).ready(function() {

    var counter = 0;
    var randomNumber = "";
    var wins = "";
    var losses = "";
    var num1 = 0; 
    var num2 = 0;
    var num3 = 0;
    var num4 = 0;


    function resetGame() {
        randomNumber = Math.floor(Math.random() * 102 + 19);
        $("#randomNumber").text(randomNumber);
        counter = 0;
        $("#totalScore").text(counter);
        random = Math.floor(Math.random() * 12 + 1);
        
        if (random != num1 && random != num2 && random != num3 && random != num4) {
            num1 = random;            
        } else {
            num1 = Math.floor(Math.random() * 12 + 1);            
        };
        
        random = Math.floor(Math.random() * 12 + 1);
        if (random != num1 && random != num2 && random != num3 && random != num4) {
            num2 = random;            
        } else {
            num2 = Math.floor(Math.random() * 12 + 1);            
        };
        
        random = Math.floor(Math.random() * 12 + 1);
        if (random != num1 && random != num2 && random != num3 && random != num4) {
            num3 = random;    
        } else {
            num3 = Math.floor(Math.random() * 12 + 1);            
        };
        
        random = Math.floor(Math.random() * 12 + 1);
        if (random != num1 && random != num2 && random != num3 && random != num4) {
            num4 = random;           
        } else {
            num4 = Math.floor(Math.random() * 12 + 1);          
        };
    }

    function checkWin() {
        if (counter === randomNumber) {       
            $("#againWin").css('display', 'block');     
            wins++;
            $("#wins").text(wins);     
            $("#winButton").on("click", function() {
                $("#againWin").hide();
                resetGame();
            })    
        }
        else if (counter >= randomNumber) {       
            $("#againLose").css('display', 'block');        
            losses++;
            $("#losses").text(losses);
            $("#loseButton").on("click", function() {
                $("#againLose").hide();
                resetGame();
            })
            }
    }
    
    resetGame();

    $("#button1").on("click", function() {
      counter += num1;
       $("#totalScore").text(counter);
       checkWin();     
    });

    $("#button2").on("click", function() {       
        counter += num2;
        $("#totalScore").text(counter);
        checkWin();      
    });

    $("#button3").on("click", function() {
        counter += num3;
        $("#totalScore").text(counter);
        checkWin();       
    });

    $("#button4").on("click", function() {
        counter += num4;
        $("#totalScore").text(counter);
        checkWin();     
    });

});