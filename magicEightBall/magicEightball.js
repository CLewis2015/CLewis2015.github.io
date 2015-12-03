  //jquery 8ball shaker
$(document).ready(function() {
   $("#shakeIt").click(function() {
       $("#shakeIt").effect("shake"); //jQuery UI effesct
       $("#result").empty(magic); //removes the last result

    //object eightball
       var eightball = {
            index: 0,
            advice: ["yes", "no", "maybe", "unlikely", "ask again"],
            shake: function () {
             this.index = Math.floor(Math.random()*5);
                }, //generates a random number
            look: function () {
             return this.advice[this.index];   //generates advice message based on random number
            }
        }
       
    //calling eightball functions
        eightball.shake();
        var magic = eightball.look();
       
    //a timed event that shows the result after the shaking has stopped
       function msg () {
       $("#result").append("The magic 8 ball says . . . <strong>" + magic + "</strong>");}
       setTimeout(msg, 1000);
   });          
});
        
    
        
        