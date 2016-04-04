<?php
    
    $answer1 = $_POST['q1'];
    $answer2 = $_POST['q2'];
    $answer3 = $_POST['q3'];
    $answer4 = $_POST['q4'];
    $answer5 = $_POST['q5'];
    $answer6 = $_POST['q6'];
    $answer7 = $_POST['q7'];
    $answer8 = $_POST['q8'];
    $answer9 = $_POST['q9'];
    $answer10 = $_POST['q10'];

    $totalCorrect = 0;
    
    if ($answer1 == "C") { $totalCorrect++; }
    if ($answer2 == "A") { $totalCorrect++; }
    if ($answer3 == "A") { $totalCorrect++; }
    if ($answer4 == "C") { $totalCorrect++; }
    if ($answer5 == "D") { $totalCorrect++; }
    if ($answer6 == "A") { $totalCorrect++; }
    if ($answer7 == "D") { $totalCorrect++; }
    if ($answer8 == "A") { $totalCorrect++; }
    if ($answer9 == "C") { $totalCorrect++; }
    if ($answer10 == "D") { $totalCorrect++; }

    $score = $totalCorrect/10 * 100;
   
?>

<!DOCTYPE HTML> 
<html> 
<head>
    <link type="text/css" rel="stylesheet" href="../styles/biologybird.css">
   <script src="../../scripts/jquery-1.11.3.js"></script>
    <script src="../scripts/biologybird.js"></script>
</head>
    
<body>
    <nav> 
        <ul role=navigation>
        <a href ="../../index.html" id="logoA"><img src="../../images/globe.png" id="logo"></a>
            <li><a href="../biologybird.html"> Home </a></li>
            <li><a href="cellRespPpt.html">Notes</a></li>
            <li><a href="cellLab.html">Lab</a></li>
            <li><a href="mitosis.html">Study</a></li>
            <li><a href="QandA.php">Quiz</a></li>
        </ul>
    </nav> 


    <h1>Cytology Quiz</h1>
        <div id="messageArea">
         <h3><?php echo "Your Score: $score&#37;";?></h3>  
        </div>
   <form action="QandA.php " method="post">
       <fieldset>
           <legend>1. What is the most basic living or structural unit of all life?</legend>
           <label> <input type="radio" name = "q1" value="A">organelle</label> <br>
           <label> <input type="radio" name = "q1" value="B">tissue </label><br>
           <label> <input type="radio" name = "q1" value="C">cell </label><br> 
           <label><input type="radio" name = "q1" value="D">organ </label><br>
       </fieldset><br>
       
        <fieldset>
           <legend>2. Which cell structure is responsible for coordinating cell activities and is also responsible for reproduction?</legend>
            <label> <input type="radio" name = "q2" value="A">the nucleus</label> <br>
            <label> <input type="radio" name = "q2" value="B">the cell membrane and/or the cell wall</label><br>
            <label> <input type="radio" name = "q2" value="C">the cytoplasm</label><br> 
            <label> <input type="radio" name = "q2" value="D">the mitochondria</label><br>
       </fieldset><br>
       
      <fieldset>
           <legend>3. What is the name of the cell organelle in which food and oxygen react to release energy during respiration? </legend>
            <label> <input type="radio" name = "q3" value="A">mitochondrion</label> <br>
            <label> <input type="radio" name = "q3" value="B">vacuole </label><br>
            <label> <input type="radio" name = "q3" value="C">nucleus </label><br> 
            <label> <input type="radio" name = "q3" value="D">endoplasmic reticulum</label><br>
       </fieldset><br>
       
       <fieldset>
            <legend>4. Which structure regulates materials entering and leaving the cell?</legend>
            <label> <input type="radio" name = "q4" value="A">nucleus</label> <br>
            <label> <input type="radio" name = "q4" value="B">mitochondrion </label><br>
            <label> <input type="radio" name = "q4" value="C">cell membrane</label><br> 
            <label> <input type="radio" name = "q4" value="D">cell wall </label><br>
      </fieldset><br>
       
       <fieldset>
            <legend>5. Why does diffusion take place?</legend>
            <label> <input type="radio" name = "q5" value="A">because molecules grow</label> <br>
            <label> <input type="radio" name = "q5" value="B">because molecules change</label><br>
            <label> <input type="radio" name = "q5" value="C">because molecules shrink</label><br> 
            <label> <input type="radio" name = "q5" value="D">because molecules move</label><br>
       </fieldset><br>
       
        <fieldset>
            <legend>6. Which of the following elements are all living things primarily composed of?</legend>
            <label> <input type="radio" name = "q6" value="A">carbon, hydrogen, nitrogen, and oxygen</label> <br>
            <label> <input type="radio" name = "q6" value="B">carbon, helium, nitrogen, and oxygen</label><br>
            <label> <input type="radio" name = "q6" value="C">chlorine, hydrogen, nitrogen, and oxygen</label><br> 
            <label> <input type="radio" name = "q6" value="D">chlorine, hydrogen, nitrogen, and helium</label><br>      
       </fieldset><br>
            
        <fieldset>
            <legend>7. What is the clear, jelly-like substance that is found inside plant and animal cells called?</legend>
            <label> <input type="radio" name = "q7" value="A">plasma</label> <br>
            <label> <input type="radio" name = "q7" value="B">vacuoles</label><br>
            <label> <input type="radio" name = "q7" value="C">lymph</label><br> 
            <label> <input type="radio" name = "q7" value="D">cytoplasm</label><br>
       </fieldset><br>
       
       <fieldset>
            <legend>8. Which part of plant cells are normally green?</legend>
            <label> <input type="radio" name = "q8" value="A">chloroplast</label> <br>
            <label> <input type="radio" name = "q8" value="B">chromatin</label><br>
            <label> <input type="radio" name = "q8" value="C">cytoplasm</label><br> 
            <label> <input type="radio" name = "q8" value="D">nucleus</label><br>
       </fieldset><br>
     
        <fieldset>
            <legend>9. Which of the following is not a part of an animal cell?</legend>
            <label> <input type="radio" name = "q9" value="A">cell membrane</label> <br>
            <label> <input type="radio" name = "q9" value="B">nucleus</label><br>
            <label> <input type="radio" name = "q9" value="C">cell wall</label><br> 
            <label> <input type="radio" name = "q9" value="D">vacuole</label><br>
        </fieldset><br>
      
     <fieldset>
            <legend>10. The diffusion of water across a membrane from an area of higher concentration to an area of lower concentration is called ___.</legend>
            <label> <input type="radio" name = "q10" value="A">diffusion</label> <br>
            <label> <input type="radio" name = "q10" value="B">cytoplasm</label><br>
            <label> <input type="radio" name = "q10" value="C">photosynthesis</label><br> 
            <label> <input type="radio" name = "q10" value="D">osmosis</label><br>      
       </fieldset><br>
       
    <input type="submit" value="Submit Quiz" id="score"/>
</form>
        
    </body>
</html>